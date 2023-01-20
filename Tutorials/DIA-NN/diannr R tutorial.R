#Install and load necessary packages
install.packages('devtools')
install.packages('tidyverse')
library(devtools)
library(magrittr)
library(dplyr)
install_github('https://github.com/kswovick/diannr')
library(diannr)

#Change your working directory to the folder containing the diann report
setwd("~/")

#The following commabnd performs several functions including:
#     -import the diann report
#     -filter low confidence precursors and keratin contaminants
#     -calculate MaxLFQ protein abundance for each protein group
#     -tidy the data
data <- diannr::prepare_data(
   filepath = 'report.tsv'
      )
#To make the next step more simple, we will print out the name of each sample
view(data %>% dplyr::distinct(run))

#We will create metadata annotation which will connect each sample to a group
#Running this command will give you a prompt in the console asking you to enter 
#the group for each sample. The proper way to do this is enter each group, 
#seperated by a comma and no spaces. 
#For example, we have samples: 1, 2, 3, 4, 5, 6. And samples 1-3 and WT and 4-6 
#are KO.
#After running 'view(data %>% distinct(run))', the sample names appear in the 
#following order: 2, 3, 4, 5, 6,1
#In the console prompt, we would type the following: WT,WT,KO,KO,KO,WT
#And then press enter.
sample_annotation <- diannr::create_metadata(data = data)

#We will now connect the metadata information to our peptide- and protein group-
#level data. For the protein group data, we will also count the nubmer of peptides 
#quantified in each protein group and impute any missing values based on the 
#implementation in Perseus. 
pep_data <- diannr::annotate_peptide(data = data,
                             sample_annotation = sample_annotation)
pg_data <- diannr::annotate_protein(data = data,
                            sample_annotation = sample_annotation)

#We perform a t-test to calculate the p-value for each protein comparison
t_test_data <- perform_t_test(pg_data = pg_data)

#We export a .tsv into the working directory that contains protein-level data in 
#wide format. Each row is one protein group and there are columns for:
#     -Protein group
#     -The protein name of the first protein in the group
#     -The gene name for the first protein in the group
#     -For each group comparison:
#        -t-test p-value
#        -log2 expression fold change
#     -For each sample:
#        -number of peptides quantified
#        -log2 MaxLFQ protein group abundance
#This file can then be used to do whatever downstream analysis you would like to 
#perform.
write_report(t_test_data = t_test_data,
             pg_data = pg_data,
             filename = 'diannr_report.tsv')

#If you want some PDFs automatically generated, there are two separate commands 
#that will make PDFs in your working directory.
#One is primarily for QC purposes that indicate how well the MS runs performed
#and how consistent the data is across the samples. The other is more useful for
#customer end users and contains plots such as:
#     -Sample correlation and heatmap
#     -Total protein IDs
#     -Volcano plots 
make_qc_plots(pep_data = pep_data,
              pg_data = pg_data,
              filename = 'QC_plots.pdf'
              )
make_customer_plots(pep_data = pep_data,
                    pg_data = pg_data,
                    t_test_data = t_test_data,
                    filename = 'diannr_plots.pdf',
                    fold_change_cutoff = 1, #changes which proteins are colored 
                                            #based off log2 fold change
                    p_value_cutoff = 0.05) #changes which proteins are colored 
                                           #based off p-value