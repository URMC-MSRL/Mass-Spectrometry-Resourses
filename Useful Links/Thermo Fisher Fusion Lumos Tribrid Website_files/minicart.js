window.minicartLayoutContent = "<div class=\"mini-cart-layout\" id=\"miniCartContainer\" style=\"display: none\">  <style>    #miniCart {      display: block;    }    #minicartSpinner {      background: none #fff;      bottom: 0;      left: 0;      padding: 60px 20px 0 20px;      position: absolute;      right: 0;      text-align: center;      top: 0;    }    .geneart-project-title {      color: #1e8ae7;    }  </style>  <div id=\"miniCartPositioner\" ng-controller=\"minicartController\">    <div id=\"miniCart\" class=\"minicart active\" ng-show=\"!!minicartVisible\">      <div id=\"minicart-wrapper\">        <div id=\"minicart-error-message\" ng-show=\"!!error\">{{error}}</div>        <div class=\"new-minicart-right\" ng-hide=\"!!isLoading\">          <div id=\"minicart-mobile-toggle\" class=\"header-icon-toggle\" mc-omni-action=\"mobile|close\">          </div>          <div id=\"minicart-summary-header\">            <strong>{{ 'minicart.cartSummary' | translate }}</strong>          </div>          <div id=\"minicart-summary-content\">            <div class=\"minicart-row\" id=\"minicart-subtotal\" ng-show=\"!!isAnonymous\">              <div class=\"minicart-left-cell\">{{ 'minicart.subTotal' | translate }}:</div>              <div class=\"minicart-right-cell\">                <span class=\"minicart-currency\">&nbsp;{{ currencyCode }}</span>                <span class=\"minicart-price\"> {{ subTotal }}</span>              </div>            </div>            <div class=\"minicart-row\" id=\"minicart-your-price\" ng-show=\"!isAnonymous\">              <div class=\"minicart-left-cell\">{{ 'minicart.yourPrice' | translate }}:</div>              <div class=\"minicart-right-cell\">                <span class=\"minicart-currency\">&nbsp;{{ currencyCode }}</span>                <span class=\"minicart-price\"> {{ subTotal }}</span>              </div>            </div>          </div>          <a class=\"button commerce-button btn-commerce minicart-button\"             id=\"minicart-checkout-button\" mc-omni-action=\"View cart & checkout\"             href=\"{{checkoutLink}}\" bind-html=\"{{'minicart.viewCart' | translate}}\"></a>        </div> <!-- end minicart right -->        <div id=\"minicart-left\" ng-hide=\"!!isLoading\">          <div id=\"minicart-header\" ng-if=\"countryCode !== 'jp'\">            <strong>              <span id=\"minicart-added-prefix\">{{ 'minicart.cartNameLabel' | translate }}</span>              <span id=\"minicart-cart-name\">&nbsp;{{cartName}}</span>              <span id=\"minicart-added-suffix\"></span>            </strong>&nbsp;            <span id=\"minicart-change-link\"></span>          </div>          <div id=\"minicart-header\" ng-if=\"countryCode === 'jp'\">            <strong>              <span id=\"minicart-cart-name\">{{cartName}}</span>              <span id=\"minicart-added-suffix\">{{ 'minicart.cartNameLabel' | translate }}</span>            </strong>&nbsp;            <span id=\"minicart-change-link\"></span>          </div>          <div class=\"line-border\"></div>          <div id=\"minicart-items\">            <!-- <div class=\"minicart-row\" id=\"minicart-items-header\">                            <div class=\"minicart-left-cell\">                                <strong>{{ 'minicart.minicartProduct' | translate }}</strong>                            </div>                            <div class=\"minicart-middle-cell\">                                <strong>{{ 'minicart.quantity' | translate }}</strong>                            </div>                            <div class=\"minicart-right-cell\">                                <strong>{{ 'minicart.total' | translate }}</strong>                            </div>                        </div> -->            <div id=\"minicart-items-rows\">              <!-- Warning message for SCMS user -->              <div class='minicart-row'>                <div class=\"warning-msg\" ng-show=\"!isB2bUser && isScms && errorSku != ''\">                  <div class=\"warning-msg__text\">                    <strong>{{\"messages.warning\" | translate}}&nbsp;</strong>                    {{ errorSku }}                    {{ \"messages.warningMessage\" | translate }}                  </div>                  <i class=\"tf-icon tf-close-mono\" ng-click=\"errorSku = ''\"></i>                </div>              </div>              <div class='minicart-row' ng-repeat=\"lineItem in lineItems\">                <div class='minicart-left-cell minicart-product-name'>                  <a class='minicart-product-link' href='{{lineItem.catalogUrl}}'                     bind-html=\"{{lineItem.catalogTitle}}\" title=\"{{lineItem.catalogTitle}}\"                     ng-if=\"lineItem.productType.toLowerCase() !== 'geneart'\"></a>                  <div class='geneart-project-title'                       ng-if=\"lineItem.productType.toLowerCase() === 'geneart'\">                    {{ 'minicart.projectName' | translate }}:&nbsp;{{lineItem.projectTitle}}                  </div>                  <div ng-if=\"lineItem.displayCatalogNumber\">                    {{ 'minicart.catalogNumber' | translate }}:&nbsp;{{lineItem.catalogNumber}}                  </div>                  <div ng-if=\"lineItem.productType.toLowerCase() === 'geneart'\">                    {{ 'minicart.projectId' | translate }}:&nbsp;{{lineItem.groupId}}                  </div>                  <div ng-show=\"!!lineItem.designId\">                    {{ 'minicart.id' | translate }}:&nbsp;{{lineItem.designId}}                  </div>                </div>                <div class='minicart-middle-cell minicart-product-qty'>{{lineItem.quantity}}</div>                <div class='minicart-right-cell minicart-product-price'                     ng-show=\"!isAnonymous && lineItem.priceAccess == priceAccessTypes.orderable\"                     ng-if=\"lineItem.productType.toLowerCase() !== 'geneart'\">                  {{ 'minicart.listPrice' | translate}}&nbsp;{{lineItem.listPriceTotal}}<br />                </div>                <div class='minicart-right-cell minicart-product-your-price'                     ng-show=\"!isAnonymous && lineItem.priceAccess == priceAccessTypes.orderable\"                     ng-if=\"lineItem.productType.toLowerCase() === 'geneart'\">                  {{ 'minicart.listPrice' | translate}}&nbsp;{{lineItem.projectSubTotal}}<br />                </div>                <div class='minicart-right-cell minicart-product-your-price' ng-show=\"!isAnonymous && lineItem.priceAccess == priceAccessTypes.orderable         && lineItem.productType.toLowerCase() !== 'geneart'\">                  {{ 'minicart.yourPrice' | translate}}&nbsp;{{lineItem.itemSubTotal}}                </div>                <div class='minicart-right-cell'                     ng-show=\"!!isAnonymous &&  lineItem.priceAccess == priceAccessTypes.orderable\">                  {{ 'minicart.listPrice' | translate}}: &nbsp;{{lineItem.listPriceTotal}}                </div>                <div class='minicart-right-cell'                     ng-show=\"lineItem.priceAccess == priceAccessTypes.contactUs\">                  <a class='minicart-product-link' href='{{lineItem.priceAccessLink}}'>                    {{ 'contactUs' | translate }}                  </a>                </div>                <div class='minicart-right-cell'                     ng-show=\"lineItem.priceAccess == priceAccessTypes.requestQuote\">                  <!-- <a class='minicart-product-link'  href='#'>                                        {{ 'requestQuote' | translate }}                                    </a> -->                  <div ng-show=\"lineItem.leadTarget == leadTargetTypes.siebel\">                    <a href=\"#\" ng-click=\"openRFQPopup(lineItem.catalogNumber);\">                      {{ 'requestQuote' | translate }}                      <span class=\"tf-link-pointer\"></span>                    </a>                  </div>                  <div ng-show=\"lineItem.leadTarget == leadTargetTypes.elms\">                    <a href=\"{{getRequestQuoteLink(lineItem)}}\">                      {{ 'requestQuote' | translate }}                      <span class=\"tf-link-pointer\"></span>                    </a>                  </div>                </div>                <div class='minicart-right-cell'                     ng-show=\"lineItem.priceAccess == priceAccessTypes.learnWhereToBuy\">                  <a class='minicart-product-link' href='{{lineItem.priceAccessLink}}'>                    {{ 'learnWhereToBuy' | translate }}                  </a>                </div>                <div class='minicart-right-cell'                     ng-show=\"lineItem.priceAccess == priceAccessTypes.noPrice\">                  {{ 'minicart.listPrice' | translate}}&nbsp;***<br />                </div>                <div class='minicart-right-cell'                     ng-show=\"lineItem.priceAccess == priceAccessTypes.notOrderable\">                  {{ 'minicart.listPrice' | translate}}: &nbsp;{{lineItem.listPriceTotal}}<br />                  <a class='minicart-product-link' href='{{lineItem.priceAccessLink}}'>                    {{ 'contactUs' | translate }}                  </a>                </div>                <div class='minicart-right-cell'                     ng-show=\"lineItem.priceAccess == priceAccessTypes.distributorPrice\">                  <a class='minicart-product-link' href='{{lineItem.priceAccessLink}}'>                    {{ 'minicart.signIn' | translate}}                  </a>                </div>              </div>            </div>          </div>        </div>        <div id=\"minicartSpinner\" class=\"mini-cart-spinner\" ng-show=\"!!isLoading\">          <div class=\"minicart-spinner-container\">            <img alt=\"...\" src=\"/shared-static/images/global/animeloader.gif\" />            <span id=\"minicart-spinner-string\" style=\"display:block;\"></span>          </div>        </div>      </div> <!-- end minicart wrapper -->    </div> <!-- end minicart -->  </div> <!-- end minicart positioner --></div>"; 
// Load minicart popup html to container element.
var $oldMinicart = $("#miniCartContainer");
$oldMinicart.remove();

var $cartContainer = $("#miniCartButton");
$cartContainer.append(window.minicartLayoutContent);

if(window.jasmine){
    $cartContainer["ng-app"] = "minicartApp";
    window.minicartApp = angular.module("minicartApp", []);
}
else{
    // Second we bootstrap cartlet app
    window.minicartApp = angular.module("minicartApp", []);

    setTimeout(function(){
        angular.bootstrap("#miniCartContainer", ["minicartApp"]);
    }, 500);
}

(function(app) {
    "use strict";

    app.service('cookieService', ["utils",
        function(utils) {

			var _this = this;

			var currentDomain = utils.getCurrentDomain();

            function _getCookie(name) {
                var allCookies = document.cookie;

                var cookieSplit = "";
                // Get all the cookies pairs in an array
                var cookieArray = allCookies.split(';');

                // Now take key value pair out of this array
                for (var i = 0; i < cookieArray.length; i++) {

                    cookieSplit = cookieArray[i].trim().split('=');
                    var index = cookieSplit.indexOf(name);
                    if (index >= 0) {
                        return cookieSplit[index + 1];
                    } 
                }

            }

            function _setCookie(name, value) {
                document.cookie = name + "=" + value + ";domain=." + currentDomain + ";path=/; Secure; SameSite=None;";
            }

            function _deleteCookie(name){
                document.cookie = name + "=;expires=1969-12-31T23:59:59.000Z" + ";domain=." + currentDomain + ";path=/; Secure; SameSite=None;";
            }

            function _setNewCartCookie(name, value) {
                document.cookie = name + "=" + value +";domain=." + currentDomain + ";path=/; Secure; SameSite=None;";
            }

            function _removeCookie(name){
                document.cookie = name+"= ;expires=Thu, 01 Jan 1970 00:00:01 GMT ;domain=." + currentDomain + ";path=/; Secure; SameSite=None;";
            }

            _this.getCookie = _getCookie;
            _this.setCookie = _setCookie;
            _this.deleteCookie = _deleteCookie;
            _this.setNewCartCookie = _setNewCartCookie;
            _this.removeCookie = _removeCookie;
        }

    ]);
}(window.minicartApp));
(function(app){
	"use strict";
	app.service('isoLangService',[ '$window',
		function($window){
			function _getIsoLang(){
				var result = {
	                iso: 'us',
	                lang: 'en'
            	};

				if (!!$window._lt && !!$window._lt.user){

					if (!!$window._lt.user.displayIso){
						result.iso = $window._lt.user.displayIso;
					}
		
					if (!!$window._lt.user.displayLang){
						result.lang = $window._lt.user.displayLang;
					}
				}

				return result;
			}

			return {
				getIsoLang: _getIsoLang
			};
		}
	]);
})(window.minicartApp);
(function(app) {
    "use strict";

    app.service("logService", [
        function() {
            return {
                cartDebug: function(message){
                    if (!!window){
                        if (window.cartDebug === undefined){
                            if (!!window.localStorage && !!window.localStorage.getItem){
                                var val = window.localStorage.getItem("cartDebug");

                                if (!!val && !!val.length){
                                    window.cartDebug = (val === "true");
                                }
                            }
                        }

                        if (!!window && !!window.cartDebug){
                            if (!!console && !!console.log){
                                console.log(message);
                            }
                        }
                    }
                }
            };
        }
    ]);
}(window.minicartApp));
(function(app) {
    "use strict";

    app.service("newCartTransformationService", newCartTransformationService);
    
    newCartTransformationService.$inject = ["$filter", "priceAccessTypes", "isoLangService"];
        
    function newCartTransformationService($filter, priceAccessTypes, isoLangService) {

        function transform(newCartData){

            var cartData = {};

            if (!!newCartData){

                cartData.cartKey = newCartData.cartId;
                cartData.cartName = newCartData.cartName;
                cartData.cartSubTotal = newCartData.subTotal;
                cartData.errorMessage = "";
                cartData.isAnonymous = newCartData.isAnonymous;
                cartData.currencySymbol = newCartData.currencyCode;
                
                cartData.numOfLineItems = newCartData.totalLineItems;
                cartData.totalQuantity = newCartData.totalQuantity;

                cartData.lineItems = [];

                if (!!newCartData.miniCartItems && !!newCartData.miniCartItems.length){

                    for(var i=0; i<newCartData.miniCartItems.length; i++){
                        var newCartLineItem = newCartData.miniCartItems[i];
                        var lineItem = {};

                        lineItem.product = {
                            URL: newCartLineItem.catalogUrl,
                            description: newCartLineItem.catalogTitle,
                            quantity: newCartLineItem.quantity,
                            sku: newCartLineItem.catalogNumber
                        };

                        lineItem.attributes = [
                            {
                                isDisplay: true,
                                key: 'sku',
                                name: 'Catalog number',
                                value: newCartLineItem.catalogNumber
                            }
                        ];

                        if (!!newCartLineItem.presentationAttributes &&
                            !!newCartLineItem.presentationAttributes.productProperties &&
                            !!newCartLineItem.presentationAttributes.productProperties.length
                        ){
                            for(var a=0; a<newCartLineItem.presentationAttributes.productProperties.length; a++){
                                var productProperty = newCartLineItem.presentationAttributes.productProperties[a];

                                var attribute = {
                                    isDisplay: true,
                                    key: productProperty.attributeKey,
                                    name: $filter('translate')('lineItemPresentationAttributes.' + productProperty.attributeKey),
                                    value: productProperty.attributeValue
                                };
    
                                lineItem.attributes.push(attribute);
                            }
                        }

                        var link;

                        switch(newCartLineItem.priceAccess){
                           case priceAccessTypes.contactUs:
                                link = getContactUsLink(newCartLineItem);
                                lineItem.price = {
                                    listPrice: {
                                        URL: link,
                                        value: $filter('translate')('contactUs')
                                    }
                                };
                                break;
                            case priceAccessTypes.requestQuote:
                                link = getRequestQuoteLink(newCartLineItem);
                                lineItem.price = {
                                    listPrice: {
                                        URL: link,
                                        value: $filter('translate')('requestQuote')
                                    }
                                };
                                break;
                            case priceAccessTypes.learnWhereToBuy:
                                link = getRequestQuoteLink(newCartLineItem);
                                lineItem.price = {
                                    listPrice: {
                                        URL: link,
                                        value: $filter('translate')('learnWhereToBuy')
                                    }
                                };
                                break;
                            case priceAccessTypes.noPrice:
                                lineItem.price = {
                                    listPrice: {
                                        value: "***"
                                    }
                                };
                                break;
                            case priceAccessTypes.notOrderable:
                                link = getContactUsLink(newCartLineItem);
                                lineItem.price = {
                                    listPrice: {
                                        URL: link,
                                        value: $filter('translate')('contactUs')
                                    }
                                };
                                break;
                            default:
                                lineItem.price = {
                                    listPrice: {
                                        value: newCartLineItem.listPriceTotal
                                    }
                                };

                                if (!newCartData.isAnonymous && !!newCartLineItem.itemSubTotal){
                                    lineItem.price.yourPrice = {
                                        value: newCartLineItem.itemSubTotal
                                    };
                                }                                

                                break;                            
                        }

                        cartData.lineItems.push(lineItem);
                    }
                }
            }
             
            return cartData;            
        }

        function getContactUsLink(cartItem){
            var result = "";

            if (!!cartItem){
                if (!!cartItem.contactUsLink){
                    result = cartItem.contactUsLink;
                }
                else{
                    var isoLang = isoLangService.getIsoLang();
                    cartItem.contactUsLink = "/" + isoLang.iso + "/" + isoLang.lang +
                        "/home/technical-resources/contact-us." + cartItem.catalogNumber + ".html?supportType=SL";

                    result = cartItem.contactUsLink;
                }
            }

            return result;
        }

        function getRequestQuoteLink(cartItem){
            var result = "";

            if (!!cartItem){
                if (!!cartItem.requestQuoteLink){
                    result = cartItem.requestQuoteLink;
                }
                else{
                    var isoLang = isoLangService.getIsoLang();
                    cartItem.requestQuoteLink = "/" + isoLang.iso + "/" + isoLang.lang +
                        "home/technical-resources/request-a-quote." + cartItem.catalogNumber + ".html";

                    result = cartItem.requestQuoteLink;
                }
            }

            return result;
        }


        return {
            transform: transform
        };
    }
}(window.minicartApp));

(function(app) {
    "use strict";
    app.service('omnitureService', omnitureService);
    
    omnitureService.$inject = ["$window", "utils"];

    function omnitureService($window, utils){

        var _this = {
            trackEvent: trackEvent,
            trackAddToCart: trackAddToCart,
            trackPageEvent: function(payload){ 
                if ($window._lt && $window._lt.tracking){
                    $window._lt.tracking.trackPageEvent(payload);
                }
            }
        };

        function trackEvent(cartKey, action){            
            var payload = {};

            payload.cartKey = cartKey;
            payload.prop66="CartOverlay | " + action;

            payload.eVar66=payload.prop66;
            payload.prop67=payload.prop66;
            payload.eVar67=payload.prop66;

            _this.trackPageEvent(payload);            
        }

        function trackAddToCart(addToCartData, additionalOmniParameters, cartForm){
            if (!!addToCartData){
                
                var payload = {};
                payload.events='AddedToCart';
                
                if ($window.location.href.indexOf('/search/results') != -1){
                    payload.events += ',event14,event15';
                }

                payload.currencyCode = utils.getCurrencyCode();
                payload.obj = cartForm;
                payload.cartKey = addToCartData.cartId;
                payload.linkType = 'o';
                payload.linkName = 'Add To Cart';

                var totalQuantity = 0;
                var products = [];
                for(var i = 0; i < addToCartData.lineItems.length; i++){
                    var lineItem = addToCartData.lineItems[i];

                    var quantity = lineItem.quantity;
                    var sku = lineItem.product.sku;
                    var price = lineItem.price;
                    var assayId = lineItem.product.productAttributes.id;

                    if (!!quantity){
                        quantity = parseInt(quantity);
                        if (!quantity){
                            quantity = 0;
                        }
                    }
                    
                    if (!price){
                        price = 0;
                    }
                    else{
                        price = (""+price).replace(/\,/g, '');
                    }

                    if (!!assayId && assayId !== 'null' ){
                        products.push("assay-" + assayId + ";" + sku + ";" + quantity + ";" + price);
                    } else {
                        products.push("catalog product;" + sku + ";" + quantity + ";" + price);
                    }

                    totalQuantity += quantity;
                }

                payload.products = products.join(",");

                /*
                if (!miniCart.cartKey || totalQuantity == 0){
                    payload.events += ", CreateCart";
                }*/

                if (!!additionalOmniParameters){

                    if (!!additionalOmniParameters.event){
                        payload.events += ", " + additionalOmniParameters.event;
                    }

                    if (!!additionalOmniParameters.data){
                        for(var key in additionalOmniParameters.data){
                            if (!payload[key]){
                                payload[key] =additionalOmniParameters.data[key];
                            }
                        }
                    }
                }

                //_this.trackPageEvent(payload);
            }
        }

        return _this;
    }
})(window.minicartApp);

(function(app) {
    "use strict";

    app.service("switchUserCartService", switchUserCartService);

    switchUserCartService.$injector = ["$rootScope", "$q", "requests", "$http", "cookieService"];

    function switchUserCartService($rootScope, $q, requests, $http, cookieService) {

        var _this = this;

        var refreshedCartCookieName = "isCartRefreshed";

        function getRefreshedCartFlag() {
           return cookieService.getCookie(refreshedCartCookieName);
        }

        function setRefreshedCartFlag(value) {
            cookieService.setCookie(refreshedCartCookieName, value);
        }

        function deleteAuCartId() {
            cookieService.removeCookie("AU_CART_ID");
        }

        function switchUserCart(cartId){
            var deferred = new $q.defer();

            var switchUserCart = requests.switchUserCartObj(cartId);
            $rootScope.$apply(function(){
                $http.get('/api/store/user-type').then(function (response) {
                    if (!response.data.data.isAnonymous) {
                        $http(switchUserCart).then(function(results) {
                            deferred.resolve(results.data);
                        }, function(error) {
                            deferred.reject(error);
                        });
                    }
                }, function (error) {
                    console.log('Error when checking user type for switching the cart');
                    deferred.reject(error);
                });
            });
            
            return deferred.promise;
        }

        _this.switchUserCart = switchUserCart;
        _this.getRefreshedCartFlag = getRefreshedCartFlag;
        _this.setRefreshedCartFlag = setRefreshedCartFlag;
        _this.deleteAuCartId = deleteAuCartId;
    }

})(window.minicartApp);


(function(app) {
    
    app.provider('translatorService', translatorService);

    function translatorService() {

    	var translationKeys = {};
		var defaultLanguage = 'en';

		if ( window._lt ) {
			currentLanguage = window._lt.user.displayLang;
		} else currentLanguage = defaultLanguage;

		currentLanguage = currentLanguage.toLowerCase();

        function flattenJson(obj, prefix, set){
            set = set || {};

            if (typeof obj == "string"){        
                set[prefix] = obj;
            }
            else{
                prefix = !!prefix ? prefix + "." : "";
                
                for(var key in obj){
                    if (obj.hasOwnProperty(key)){
                        flattenJson(obj[key], prefix + key, set);
                    }
                }
            }

            return set;
        }

		this.setCurrentLanguage = function(newCurrent){
			currentLanguage = newCurrent;
			return;
		};

		this.addKeys = function(lang, params){
			var flatStruct = flattenJson(params || {});
			translationKeys[lang] = angular.extend(flatStruct, translationKeys[lang]);
		};

		this.getKeys = function(lang){
			if ( translationKeys[lang] ) return translationKeys[lang];
			else return translationKeys[defaultLanguage];
		};
		
		this.$get = function(){
			return function(input){				
				var out;

				if (!!translationKeys[currentLanguage]){
					out = translationKeys[currentLanguage][input];
				}

				if (!out){
					if (!!translationKeys[defaultLanguage]){
						out = translationKeys[defaultLanguage][input];
					}
				}

				if (!out){
					out = input;
				}

				return out;
			};
		};
	}

}(window.minicartApp));

(function (app) {
    "use strict";

    app.service("utils", utils);

    utils.$inject = ["viewports", "$window"];

    function utils(viewports, $window) {

		var commonDomainPart = "thermofisher.";

        function getCurrentDomain() {

            var result = "thermofisher.com";

            var hostname = window.location.host || window.location.hostname || "";

            var commonPart = commonDomainPart;
            var domainParts = hostname.split(commonPart);

            if (domainParts.length > 0) {
                result = commonPart + domainParts[1];
            }

            return result;
        }

        function getViewportSize() {

            var result = viewports.xl;

            var width = $(window).width();
            for (var key in viewports) {
                if (width < viewports[key]) {
                    result = viewports[key];
                }
            }

            return result;
        }

        function getCurrencyCode() {
            return ($window.getCookie("CK_CURRENCY_CODE") || "usd").toLowerCase();
        }

        function isValidHostName() {
            var currentDomain = getCurrentDomain();
            return currentDomain.indexOf("thermofisher.") == 0;
		}
		
		function isCommerceHostName() {
			var hostname = window.location.host || window.location.hostname || "";
			var subdomainRegex = new RegExp("^commerce\\.(.*\\.)?" + commonDomainPart.replace(".", "\\."));

			return subdomainRegex.test(hostname);
		}

		function getCommerceCheckoutUrl() {
			return environmentURL.COMERGENTSERVERSECURE + localizedLink.LIGGED_IN_CHECKOUT_LINK_SCMS;
		}

		function getCheckoutLink() {
			var checkoutUrl;

			var isCommerceWebsite = isCommerceHostName();
			if (isCommerceWebsite === true) {
				checkoutUrl = getCommerceCheckoutUrl();
			}
			else {
				checkoutUrl = "/store/cart";
			}

			return checkoutUrl;
		}

        return {
            getViewportSize: getViewportSize,
            getCurrencyCode: getCurrencyCode,
            isValidHostName: isValidHostName,
			getCurrentDomain: getCurrentDomain,
			isCommerceHostName: isCommerceHostName,
			getCheckoutLink: getCheckoutLink
        };
    }
}(window.minicartApp));
(function(app) {
    "use strict";
    app.service('cartIdService', cartIdService);
    cartIdService.$inject = ['cookieService'];
    
    function cartIdService(cookieService) {
        var cartIdCookieName = "cartId";

        function getCartId() {
           return cookieService.getCookie(cartIdCookieName);
        }
        
        function setCartId(value) {
            cookieService.setCookie(cartIdCookieName, value);
        }

        return {
            getCartId: getCartId,
            setCartId: setCartId
        };
    }

})(window.minicartApp);

(function (app) {
  'use strict';

  /*
    This service is in charge of communicating "add-to-cart" data payload
    to an appropriate cart microservice and of retrieving cart related information if needed.
    No data transformation or validation is done inside of this service
    */

  app.service('cartService', cartService);

  cartService.$inject = ['$q', '$http', '$timeout', 'requests', 'cartIdService'];

  function cartService($q, $http, $timeout, requests, cartIdService) {
    function getMinicart(cartId) {
      var deferred = new $q.defer();

      var request = requests.getMinicart(cartId);

      $timeout(function () {
        $http(request).then(
          function (response) {
            if (!cartId && !!response && !!response.data && !!response.data.data && !!response.data.data.cartId) {
              cartIdService.setCartId(response.data.data.cartId);
            }

            deferred.resolve(response.data);
          },
          function (error) {
            deferred.reject(error);
          }
        );
      });

      return deferred.promise;
    }

    function addToCart(payload, isCommerceHostName) {
      var deferred = new $q.defer();

      var addToCartReq = requests.addToCart;
      addToCartReq.data = payload;

      $timeout(function () {
        $http(addToCartReq).then(
          function (response) {
            deferred.resolve(response.data);
          },
          function (error) {
            deferred.reject(error);
          }
        );
      });

      return deferred.promise;
    }

    return {
      addToCart: addToCart,
      getMinicart: getMinicart,
    };
  }
})(window.minicartApp);

/*
This is public interface for minicart object that runs outside of Angular context
In order to call internal Angular services it uses an angular.injector
*/
function miniCartObject() {
  var serviceInstance;
  function getMinicartService() {
    if (!serviceInstance) {
      serviceInstance = window.minicartApp.minicartService; //angular.injector(['ng', 'minicartApp']).get("minicartService");
    }
    return serviceInstance;
  }

  function appReady(callback) {
    var interval = setInterval(function () {
      var service = getMinicartService();
      if (!!service) {
        clearInterval(interval);
        callback();
      }
    }, 100);
  }

  function addProductsToCart(products, additionalOmniParameters, suppressCartPopup) {
    var service = getMinicartService();
    service.addProductsToCart(products, additionalOmniParameters, suppressCartPopup);
  }

  function addToCart(cartForm, additionalOmniParameters) {
    var service = getMinicartService();
    service.addToCart(cartForm, additionalOmniParameters);
  }

  function addToCartAjax(cartForm, optionalCallBackFunctionString, additionalOmniParameters) {
    var service = getMinicartService();
    service.addToCartAjax(cartForm, optionalCallBackFunctionString, additionalOmniParameters);
  }

  function addAndCheckOutCartAjax(cartForm, optionalCallBackFunctionString, additionalOmniParameters) {
    var service = getMinicartService();
    service.addAndCheckOutCartAjax(cartForm, optionalCallBackFunctionString, additionalOmniParameters);
  }

  function removeItem() {
    throw 'Remove item is not implemented';
  }

  function setAddToCartSuccessCallback(callbackFunction) {
    if (typeof callbackFunction !== 'function') {
      throw 'Add to cart success callback must resolve to a function';
    } else {
      var service = getMinicartService();
      service.setCallback(callbackFunction);
    }
  }

  function updateItemCountInHeader(initialLoad) {
    var service = getMinicartService();
    service.updateMinicartCounter('', '', initialLoad);
  }

  function showCart(reloadMinicart) {
    appReady(function () {
      var service = getMinicartService();
      service.showCart(reloadMinicart);
    });
  }

  function hideCart() {
    appReady(function () {
      var service = getMinicartService();
      service.hideCart();
    });
  }

  function showStatus(status) {
    appReady(function () {
      var service = getMinicartService();
      service.showStatus(status);
    });
  }

  function refreshCart() {
    var service = getMinicartService();
    return service.switchUserCart();
  }

  function goCheckout() {
    var service = getMinicartService();
    return service.goCheckout();
  }

  function openRFQPopup(sku) {
    var service = getMinicartService();
    service.openRFQPopup(sku);
  }

  function initiateAddItem() {
    if (!!window.scroll) {
      scroll(0, 0);
    }

    showStatus('add');
  }

  function hideStatus() {
    showStatus(null);
  }

  function numberOfItems() {
    var service = getMinicartService();
    return service.getNumberOfItems();
  }

  /**
     @requires environmentURL.COMERGENTSERVER
     **/
  function MiniCartRequest() {
    this.protocol = document.location.toString().indexOf('https://') != -1 ? 'https:' : 'http:';
    this.host = environmentURL.COMERGENTSERVER;
    this.country = 'US';
    this.language = 'en';
    this.entryPoint = 'adirect';
    this.partner = 'lt';
    this.jsessionid = '';
    this.command = 'IVGNCartOperations';
    this.operation = '';
    this.cartKey = '';
    this.callback = '';
  }

  // Used to stub legacy non-implemented functions
  function createRequestURL(operation, callback, sessionid, chartkey) {
    console.info('Notice: Method requestJSON is deprecated and is not implemented in the new minicart.js');
    //return command;
    var miniCartRequest = new MiniCartRequest();

    miniCartRequest.operation = operation;
    miniCartRequest.callback = callback;
    miniCartRequest.jsessionid = sessionid != '' || !isUndefined(sessionid) ? sessionid : '';
    miniCartRequest.cartKey = chartkey != '' || !isUndefined(chartkey) ? chartkey : '';

    var $url = '';
    $url =
      miniCartRequest.protocol +
      '//' +
      miniCartRequest.host +
      '/' +
      miniCartRequest.language +
      '/' +
      miniCartRequest.country +
      '/' +
      miniCartRequest.entryPoint +
      '/' +
      miniCartRequest.partner;

    if (miniCartRequest.jsessionid != '') $url += ';jsessionid=' + miniCartRequest.jsessionid;

    $url += '?cmd=' + miniCartRequest.command + '&operation=' + miniCartRequest.operation;

    if (miniCartRequest.cartKey != '') $url += '&cartKey=' + miniCartRequest.cartKey;

    if (miniCartRequest.callback != '') $url += '&callback=' + miniCartRequest.callback;

    if (this.getIsLoggedIn()) {
      $url += '&li=1';
    }

    // @TODO What is this for?
    $url += '&randnum=' + Math.floor(Math.random() * 999999999999);

    return $url;
  }

  function requestJSON(url) {
    console.warn('requestJSON has been deprecated. Use ShowCart instead');

    if (
      !!url &&
      url.indexOf('operation=GetCartContents') !== -1 &&
      url.indexOf('callback=miniCart.finalizeAddItem') !== -1
    ) {
      this.showCart(true);
      this.updateItemCountInHeader();
    } else {
      /* else if (!!url && url.indexOf("operation=GetCartContents") !== -1 && url.indexOf("callback=displayMiniCartFetched") !== -1) {
			this.updateItemCountInHeader();
		} */
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.src = url;

      /*
        In splunk logs, all cmgt calls are making 404.
      */
      //document.getElementsByTagName('head').item(0).appendChild(script);
    }
  }

  /* function requestJSON(url){
        console.info("Notice: Method requestJSON is deprecated and is not implemented in the new minicart.js");



        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = "utf-8";
        script.src = url;
        document.getElementsByTagName("head").item(0).appendChild(script);
    } */

  (function onInit() {
    appReady(function () {
      refreshCart().then(function () {
        updateItemCountInHeader(true);
      });
    });
  })();

  // Public interface
  this.appReady = appReady;
  this.addProductsToCart = addProductsToCart;
  this.addToCart = addToCart;
  this.addToCartAjax = addToCartAjax;
  this.addAndCheckOutCartAjax = addAndCheckOutCartAjax;
  this.removeItem = removeItem;
  this.setAddToCartSuccessCallback = setAddToCartSuccessCallback;
  this.updateItemCountInHeader = updateItemCountInHeader;
  this.showCart = showCart;
  this.hideCart = hideCart;
  this.refreshCart = refreshCart;
  this.goCheckout = goCheckout;
  this.openRFQPopup = openRFQPopup;
  this.initiateAddItem = initiateAddItem;
  this.hideStatus = hideStatus;
  this.numberOfItems = numberOfItems;

  // Just a stub for compatibility with legacy apps
  this.createRequestURL = createRequestURL;

  // Supports legacy operations
  this.requestJSON = requestJSON;

  /* Functions are used for displayMiniCartFetched in IVGNCartOperations api call start*/
  this.loadCartOperationApi = function (totalQuantity) {
    var requestURL;

    miniCart.jsessionid = '';
    miniCart.cartKey = '';

    if (isUndefined(totalQuantity) || isNaN(totalQuantity) || totalQuantity == '') {
      requestURL = createRequestURL('GetCartContents', 'displayMiniCartFetched', miniCart.jsessionid, miniCart.cartKey);
    } else {
      requestURL = createRequestURL('GetCartContents', 'displayMiniCart', miniCart.jsessionid, miniCart.cartKey);
    }

    miniCart.requestJSON(requestURL);
  };

  this.setNumberOfItems = function (totalItems) {
    if (totalItems != undefined) {
      if (!compareCookieValueToJSON(totalItems, this.totalQuantity)) {
        this.totalQuantity = totalItems;
      }
    }
  };

  this.getIsLoggedIn = function () {
    return window._lt.user.isLoggedIn;
  };

  this.JSONToMiniCart = function (json) {
    if (!isNotEmpty(json)) {
      this.loaded = true;
      var obj = eval(json);
      this.setNumberOfItems(obj.totalQuantity);
      this.cartName = obj.cartName || 'Cart';
      if (obj.subTotal != null && obj.subTotal != '') {
        this.cartSubTotal = obj.subTotal;
      }
      if (obj.isAnonymous) {
        this.isAnonymous = obj.isAnonymous;
      }
      if (obj.miniCartItems != null && obj.miniCartItems != undefined && obj.miniCartItems != '') {
        this.itemList = [];
        $.each(obj.miniCartItems, function (i, item) {
          miniCart.addItem(item);
        });
      }
    }
  };

  this.finalizeAddItem = function (cartDataJson) {
    this.finalizeAddItemInternal(cartDataJson, false);
  };

  this.executeAddToCartSuccessCallback = function (cartDataJson) {
    if (!!window.cartletEnabled) {
      var eventData = {};
      eventData.cartData = cartDataJson;
      eventData.cartRequest = miniCart.cartRequest;

      $(document).trigger('addToCartComplete', eventData);
    }

    if (typeof this.addToCartCallback === 'function' && this.hasError === false) {
      this.addToCartCallback(cartDataJson);
    }
  };

  this.clearQuantities = function () {
    $('form[name=productForm] input, form[name=csform0] input').each(function () {
      if (nameExists(this, 'qty') && !isICard(this)) {
        if (hasValue(this)) {
          this.value = '';
        }
      }
    });
    miniCart.itemLine = [];
  };

  /*global miniCart, MiniCart, scroll, $ */
  /**
     A callback function executed from the JSONP response to an add to cart call. This calls functions to update minicart data structures and update the UI.

     @param cartDataJson {object} JSON cart object returned from comergent
     @returns {undefined}
     **/
  this.finalizeAddItemInternal = function (cartDataJson, suppressCartPopup) {
    this.JSONToMiniCart(cartDataJson);
    this.updateItemCountInHeader();
    this.clearQuantities();

    if (!suppressCartPopup) {
      this.hideStatus();
      setTimeout('miniCart.showCart(true);', 250);
    }

    this.executeAddToCartSuccessCallback(cartDataJson);
  };

  function isNotEmpty(object) {
    for (var i in object) {
      return true;
    }
    return false;
  }

  function compareCookieValueToJSON(jsonValue, cookieValue) {
    return jsonValue === cookieValue;
  }
  /* Functions are used for displayMiniCartFetched in IVGNCartOperations api call end*/
}

window.miniCart = new miniCartObject();

(function(app) {
    "use strict";

    /*
    This service is in charge of updating the number shown in upper right corner
    of the page representing the number of items in the cart.
    */

    app.service('minicartCounterService', minicartCounterService);
    
    minicartCounterService.$inject = ["$q", "cartService", "cartIdService"];

    function minicartCounterService($q, cartService, cartIdService){

        function getHeaderTotalItems(){
            return $("#miniCartHeaderTotalItems").html();
        }

        function update(cartId, totalCartQuantity, initialLoad){
            var CART_FULL_COUNT = 9999;
            var numberIsReady = $q.defer();            

            // If we already have number  - just show it
            if (!!totalCartQuantity || totalCartQuantity===0){
                numberIsReady.resolve(totalCartQuantity);
            }
            // if we don't have number - then retrieve from the server
            else{
                cartService.getMinicart(cartId).then(function(results){
                    if (!!results && !!results.data){
                        // Need to set the cartId cookie after user logs in
                        // because right now only guest cart cookie is set
                        cartIdService.setCartId(results.data.cartId);
                        numberIsReady.resolve(results.data.totalQuantity);
                        if(initialLoad){
                            miniCart.loadCartOperationApi();
                        }
                    }
                    else{
                        numberIsReady.resolve(0);
                    }
                }, function(){
                    numberIsReady.resolve(0);
                });
            }

            numberIsReady.promise.then(function(totalItems){
                var $headerItemCount = $("#miniCartHeaderTotalItems");
                var $miniCartIcon = $headerItemCount.parent().find('.icon');

                if (totalItems > 0) {
                
                    // If we have items, set it and remove empty style
                    $miniCartIcon.removeClass('cart-icon-empty');
                    $headerItemCount.removeClass('hidden').addClass('cart-items-number');
    
                    // Too full? Use 9999 as item count
                    if ( totalItems > CART_FULL_COUNT ) {
                        $headerItemCount.html(CART_FULL_COUNT);
                        $miniCartIcon.addClass('cart-icon-full');
    
                    } else {
                        $headerItemCount.html(totalItems);
                        $miniCartIcon.removeClass('cart-icon-full');
                    }
    
                } else {
                    // If no items, wipe current count and set to empty icon
                    $headerItemCount.html('');
                    $miniCartIcon.removeClass('cart-icon-full');
                    $miniCartIcon.addClass('cart-icon-empty');
                    $headerItemCount.addClass('hidden').removeClass('cart-items-number');
                }
            });
        }

        return {
            update: update,
            getHeaderTotalItems: getHeaderTotalItems
        };
    }
})(window.minicartApp);

(function(app) {
    "use strict";

    /*
    This service is in charge of triggering and accepting global
    minicart related events. No data processing or validation is done here.
    */
    
    app.service('minicartEventDispatchService', minicartEventDispatchService);
    
    minicartEventDispatchService.$inject = ["cartEvents", "minicartPopupEvents", "logService", "$rootScope"];

    function minicartEventDispatchService(cartEvents, minicartPopupEvents, logService, $rootScope){

        $rootScope.subscriptions = {};

        function isCartletEnabled(){
            return !!window && !!window.cartletEnabled;
        }

        function publishCartletEvent(eventName, data){
            logService.cartDebug("DISPATCH: CARTLET: " + eventName);
            $(document).trigger(eventName, data);
        }

        function publishMinicartEvent(eventName, data){
            logService.cartDebug("DISPATCH: MINICART: " + eventName);
            if (!!$rootScope.subscriptions){
                var eventSubscriptions = $rootScope.subscriptions[eventName];
                if (!!eventSubscriptions && !!eventSubscriptions.length){
                    for(var i=0; i<eventSubscriptions.length; i++){
                        var callback = eventSubscriptions[i];
                        if (!!callback){
                            callback(data);
                        }
                    }
                }
            }
        }

        function publishAddToCartBegin(data, suppressCartPopup){
            if (suppressCartPopup) return;
            if (!!isCartletEnabled()){
                publishCartletEvent(cartEvents.addToCartBegin, data);
            }
            else{
                publishMinicartEvent(minicartPopupEvents.minicartPopupBegin, data);
            }
        }

        function publishAddToCartComplete(data){
            if (!!isCartletEnabled()){
                publishCartletEvent(cartEvents.addToCartComplete, data);
            }
            else{
                publishMinicartEvent(minicartPopupEvents.minicartPopupComplete, data);
            }
        }

        function publishAddToCartError(data){
            publishCartletEvent(cartEvents.minicartError, data);
        }

        function publishHideCart(data){
            if (!!isCartletEnabled()){
                publishCartletEvent(cartEvents.hideCart, data);
            }
            else{
                publishMinicartEvent(minicartPopupEvents.minicartPopupHide, data);
            }
        }

        function publishMinicartPopupBegin(data){
            publishMinicartEvent(minicartPopupEvents.minicartPopupBegin, data);
        }

        function publishMinicartPopupComplete(data){
            publishMinicartEvent(minicartPopupEvents.minicartPopupComplete, data);
        }

        function publishMinicartPopupHide(data){
            publishMinicartEvent(minicartPopupEvents.minicartPopupHide, data);
        }

        function subscribe(eventName, callback){
            if (!!eventName && !!callback){
                $rootScope.subscriptions[eventName] = $rootScope.subscriptions[eventName] || [];
                $rootScope.subscriptions[eventName].push(callback);
            }
        }

        return {
            publishAddToCartBegin: publishAddToCartBegin,
            publishAddToCartComplete: publishAddToCartComplete,
            publishAddToCartError: publishAddToCartError,
            publishHideCart: publishHideCart,
            publishMinicartPopupBegin: publishMinicartPopupBegin,
            publishMinicartPopupComplete: publishMinicartPopupComplete,
            publishMinicartPopupHide: publishMinicartPopupHide,
            subscribe: subscribe
        };
    }
})(window.minicartApp);
(function(app) {
    "use strict";

    /*
    This service is in charge of showing and hiding cart popup
    */

    app.service('minicartPopupService', minicartPopupService);
    
    minicartPopupService.$inject = ["minicartCounterService", "minicartEventDispatchService"];

    function minicartPopupService(minicartCounterService, minicartEventDispatchService){
        function showCart(reloadMinicart) {
            var totalItems = minicartCounterService.getHeaderTotalItems();

            if (totalItems !== "" || !!reloadMinicart){
                // Responsive: Hides other open panels
                // This function is located in headerFooter.js :(
                if (!!hideOpenHeaderPanels){
                   // hideOpenHeaderPanels();
                } 

                minicartEventDispatchService.publishMinicartPopupComplete({ noReload: !reloadMinicart });
            }
        }

        function hideCart(){
            minicartEventDispatchService.publishMinicartPopupHide();
	    }

        function showStatus(status){
            minicartEventDispatchService.publishMinicartPopupBegin(status);
        }

        return {
            showCart: showCart,
            hideCart: hideCart,
            showStatus: showStatus
        };
    }
})(window.minicartApp);
(function(app) {
    "use strict";

    /*
    This service is in charge of adding line items to the transformed request. It is used by minicart 
    request transformation service
    */

    app.service('minicartRequestBuilder', minicartRequestBuilder);
    
    minicartRequestBuilder.$inject = [];

    function minicartRequestBuilder(){
        var lineItems = [];


        return {
            newRequest: function(){
                lineItems = [];
            },
            addLineKey: function(sku, quantity, description, price, size, assayID, assayName, purity, scale, ratePlanId, ratePlanName, productRateChargeId, baseLineKey, baseLineSku, billingPeriod, lineNo, parentLineNo) {
                var miniCartLine = new MiniCartLine(sku, quantity, description, price, size, assayID, assayName, purity, scale, ratePlanId, ratePlanName, productRateChargeId, baseLineKey, baseLineSku, billingPeriod, lineNo, parentLineNo);
                lineItems.push(miniCartLine);
            },
            getRequest: function(){
                return lineItems;
            }
        };
    }

    function MiniCartLine(
        sku, 
        quantity, 
        description, 
        price, 
        size, 
        assayID, 
        assayName, 
        purity, 
        scale, 
        ratePlanId, 
        ratePlanName, 
        productRateChargeId, 
        baseLineKey, 
        baseLineSku, 
        billingPeriod, 
        lineNo, 
        parentLineNo 
    )
    {
        var lineItem = {
            quantity: quantity,
			lineNo: !!lineNo ? lineNo : '',
            parentLineNo: !!parentLineNo ? parentLineNo : '',
            price: price,
            product: {
                sku: sku, 
				productSize: size,
                description: "",
                productAttributes: {
                    id: assayID,
					name: assayName,
					purity: purity,
                    scale: !!scale ? scale: '',
					baseLineSku: baseLineSku,
					ratePlanId: ratePlanId,
                    ratePlanName: ratePlanName,
                    ratePlanCharges: [{
                        id: productRateChargeId,
						billingPeriod: billingPeriod,
                    }]
                }
            }
        };

        return lineItem;
    }
})(window.minicartApp);
(function(app) {
    "use strict";

    app.service('minicartRequestTransformationService', minicartRequestTransformationService);
    minicartRequestTransformationService.$inject = ['minicartRequestBuilder'];

    function minicartRequestTransformationService(requestBuilder){

        function getFormValues(cartForm) {
            
            requestBuilder.newRequest();
        
            var form = cartForm || "productForm";

            var hasQuantity = false;

            var addToCartSkus = 0;
            var addToCartErrorSkus = 0;

            var quantity = 0;
            var sku,price,description,size;

            var assayID, assayName, purity, scale;
            var i;
            var productRatePlanId;
            var productRatePlanName="";
            var productRateChargeId;
            var baseLineKey;
            var baseLineSku="";
            var billingPeriod="";
                
            $('#' + form + ' input').each(function(x) {
                
                if(nameExists(this,"qty")){
                    i=0;

                    if (this.value > 0 && this.value%1 == 0) {
                        quantity = this.value;
                        addToCartSkus++;
                        hasQuantity = true;
                    } else {
                        if ( this.value != "" ) addToCartErrorSkus++;
                    }
                }
                
                if(hasQuantity == true){
                    i++;
                    sku = nameExists(this,"sku") ? this.value : sku;  
                    size = nameExists(this,"size") ? this.value : size; 
                    description =  nameExists(this,"description") ? this.value : description;
                    price =  nameExists(this,"price") ? this.value : price;
                    assayID = nameExists(this,"assayID") ? this.value : assayID;  
                    assayName = nameExists(this,"assayName") ? this.value : assayName; 
                    purity =  nameExists(this,"purity") ? this.value : purity;
                    scale =  nameExists(this,"scale") ? this.value : scale;			
                    
                    if(i % 10 == 9 && i != 1){
                        if(!isValidQuantity(quantity) && quantity != "") {
                            errorSkus += sku + ",";
                        } else {
                            if(quantity != "") {					
                                requestBuilder.addLineKey(sku, quantity, description, price, size, assayID, assayName, purity, scale, "", "", "", "", "", "");
                            }
                        }
                        quantity = "",sku = "",price = "",description = "",size = "";
                        assayID = "",assayName = "",purity = "",scale = "";
                        hasQuantity = false;
                    }
                }
            }); 

            var lineNo = 0;
            var parentLineNo = 1;
            var hasSubscription = false; 

            $('#'+form+' .ddsubscription , #'+form + ' .cbsubscription').each(function(index,element) {
                quantity="1";
                hasSubscription = true;

                //Child item
                if($(this).hasClass("cbsubscription") && $(this).is(':checked') && nameExists(this, "addOnProductGroup")){	
                    lineNo++;

                    productRatePlanId = $(this).attr("rate-plan-id");
                    productRateChargeId = $(this).attr("rate-plan-charge-id");
                    productRatePlanName = $(this).attr("rate-plan-name");
                    billingPeriod = $(this).attr("rate-plan-billing-period");

                    baseLineSku = $(this).attr("base-sku-name");
                    sku = $(this).attr("sku-name");
                    requestBuilder.addLineKey(sku, quantity, description, price, size, assayID, assayName, purity, scale, productRatePlanId, productRatePlanName, productRateChargeId, baseLineKey, baseLineSku, billingPeriod, lineNo, parentLineNo);
                    
                //Parent item
                } else if($(this).hasClass("ddsubscription") && $("option:selected", this).length>0){
                    lineNo++;

                    productRatePlanId = nameExists(this, "Subscription") ? $("option:selected", this).attr("rate-plan-id"): productRatePlanId;
                    productRateChargeId = nameExists(this, "Subscription") ? $("option:selected", this).attr("rate-plan-charge-id") : productRateChargeId;
                    productRatePlanName = nameExists(this, "Subscription") ? $("option:selected", this).attr("rate-plan-name") : productRatePlanName;
                    billingPeriod = nameExists(this, "Subscription") ? $("option:selected", this).attr("rate-plan-billing-period") : billingPeriod;

                    sku = $(this).attr("sku-name");
                    requestBuilder.addLineKey(sku, quantity, description, price, size, assayID, assayName, purity, scale, productRatePlanId, productRatePlanName, productRateChargeId, baseLineKey, baseLineSku, billingPeriod, lineNo);
                    
                }
                	 
                quantity = "",sku = "",price = "",description = "",size = "";
                assayID = "",assayName = "",purity = "",scale = "", productRatePlanId="", productRatePlanName="", productRateChargeId="", billingPeriod="";
            });
                    
            if ( hasSubscription || ( addToCartSkus > 0 && addToCartErrorSkus == 0 ) ) {
                var thisForm = $('#' + form);
                return requestBuilder.getRequest();
            } else {
                //Because html entities and region encoding
                throw "Unable to read product form";
            }
        }

        function getRequestFromProducts(products){
            requestBuilder.newRequest();

            if (!!products && !!products.length){
                for (var i = 0; i < products.length; i++ ) {
                    var product = products[i];
                    if(!!product.qty && isValidQuantity(product.qty)){
                        requestBuilder.addLineKey(product.sku, product.qty, product.description, product.price, product.size, product.assayID, product.assayName, product.purity, product.scale, product.ratePlanId, product.ratePlanName, product.productRateChargeId, "", "", "");                       
                    }
                }
            }

            var lineItems = requestBuilder.getRequest();            
            return lineItems.length > 0 ? lineItems : null;
        }

        function nameExists(context, prefix)
        {
            var name = context.name.toLowerCase();
            if(name.indexOf(prefix.toLowerCase()) !== -1)
            {
                return true;
            }
        }

        function isValidQuantity(quantity)
        {
            return !(isNaN(quantity) || quantity < 1);
        }

        return {
            getFormValues: getFormValues,
            getRequestFromProducts: getRequestFromProducts
        };
    }
})(window.minicartApp);
(function (app) {
  'use strict';

  /*
      This is main minicart service. Most of the internal logic is done in satellite services.
      This is public interface that replicates legacy minicart and routes requests through transformation
      to minicart microservice.
      */

  app.service('minicartService', minicartService);

  minicartService.$inject = [
    '$q',
    '$timeout',
    'minicartRequestTransformationService',
    'cartService',
    'minicartEventDispatchService',
    'isoLangService',
    'cartIdService',
    'omnitureService',
    'minicartCounterService',
    'minicartPopupService',
    'utils',
    '$window',
    'switchUserCartService',
    'requestQuoteService',
    'logService',
  ];

  function minicartService(
    $q,
    $timeout,
    minicartRequestTransformationService,
    cartService,
    minicartEventDispatchService,
    isoLangService,
    cartIdService,
    omnitureService,
    minicartCounterService,
    minicartPopupService,
    utils,
    $window,
    switchUserCartService,
    requestQuoteService,
    logService
  ) {
    var callbacks = [];

    function addToCart(cartForm, additionalOmniParameters) {
      var invalidRequest = true;

      var lineItems = minicartRequestTransformationService.getFormValues(cartForm, additionalOmniParameters);

      if (!!lineItems) {
        invalidRequest = false;

        if (!!lineItems) {
          sendAddToCartRequest(lineItems).then(function (request) {
            omnitureService.trackAddToCart(request, additionalOmniParameters, cartForm);
          });
        }
      }

      if (invalidRequest) {
        minicartEventDispatchService.publishAddToCartError('Minicart request is not valid!');
        throw 'Minicart request is not valid!';
      }

      return;
    }

    function addProductsToCart(products, additionalOmniParameters, suppressCartPopup) {
      var invalidRequest = true;

      if (!!products && typeof products == 'object') {
        if (!Array.isArray(products)) {
          products = [products];
        }

        var lineItems = minicartRequestTransformationService.getRequestFromProducts(products);

        if (!!lineItems) {
          invalidRequest = false;
          var isCommerceHostName = utils.isCommerceHostName();

          sendAddToCartRequest(lineItems, isCommerceHostName, suppressCartPopup === true).then(function (request) {
            omnitureService.trackAddToCart(request, additionalOmniParameters);
          });
        }
      }

      if (invalidRequest) {
        minicartEventDispatchService.publishAddToCartError('Minicart request is not valid!');
        throw 'Minicart request is not valid!';
      }
    }

    function addToCartAjax(cartForm, optionalCallBackFunctionString, additionalOmniParameters) {
      var invalidRequest = true;
      if (!utils.isValidHostName()) {
        //throw window.location.hostname + " is not a valid hostname";
        console.error(window.location.hostname + ' is not a valid hostname');
      }

      if (!!optionalCallBackFunctionString) {
        var evalJson = '{ callback: ' + optionalCallBackFunctionString + '}';
        var evalCallback = JSON.parse(evalJson);
        if (!!evalCallback.callback) {
          setCallback(evalCallback.callback);
        }
      }

      cartForm = cartForm || '';
      var lineItems = minicartRequestTransformationService.getFormValues(cartForm);

      if (!!lineItems) {
        invalidRequest = false;

        var isCommerceHostName = utils.isCommerceHostName();

        sendAddToCartRequest(lineItems, isCommerceHostName).then(function (request) {
          omnitureService.trackAddToCart(request, additionalOmniParameters, cartForm);
        });
      }
    }

    function addAndCheckOutCartAjax(cartForm, additionalOmniParameters) {
      var invalidRequest = true;

      var lineItems = minicartRequestTransformationService.getFormValues(cartForm, additionalOmniParameters);

      if (!!lineItems) {
        invalidRequest = false;

        if (!!lineItems) {
          sendAddToCartRequest(lineItems).then(function (request) {

            window.location.href = 'https://' + $window.environmentURL.WCMSERVER + '/store/cart';
          });
        }
      }

      if (invalidRequest) {
        minicartEventDispatchService.publishAddToCartError('Minicart request is not valid!');
        throw 'Minicart request is not valid!';
      }

      return;
    }

    function sendAddToCartRequest(lineItems, isCommerceHostName, suppressCartPopup) {
      var deferredResult = $q.defer();

      if (!!lineItems) {
        var isoLang = isoLangService.getIsoLang();

        var request = {
          cartName: 'Cart',
          countryCode: isoLang.iso,
          languageCode: isoLang.lang,
          lineItems: lineItems,
        };

        var cartId = cartIdService.getCartId();

        if (!!cartId) {
          request.cartId = cartId;
        }

        minicartEventDispatchService.publishAddToCartBegin({}, suppressCartPopup);

        cartService.addToCart(request, isCommerceHostName === true).then(
          function success(response) {
            if (!!response && !!response.data && !!response.data.cartId) {
              cartIdService.setCartId(response.data.cartId);
              var errorSkus = [];
              // If one of the SKU gets failed
              if (!response.data.success) {
                response.data.lineItems.forEach(function(lineItem) {
                  if (lineItem.lineItemStatus) {
                    errorSkus.push(lineItem.product.sku);
                  }
                });
              }

              deferredResult.resolve(request);

              if (!suppressCartPopup) {
                cartService.getMinicart(cartId).then(
                  function success(minicartResponse) {
                    if (!!minicartResponse && !!minicartResponse.data) {
                      minicartResponse.data.newCart = true;
                      var eventData = {
                        cartData: minicartResponse.data,
                        cartRequest: JSON.stringify(request),
                        errorSku: errorSkus.join(",")
                      };
  
                      updateMinicartCounter(minicartResponse.data.totalQuantity);
                      runCallbacks(minicartResponse.data);
  
                      minicartEventDispatchService.publishAddToCartComplete(eventData);
                    }
                  },
                  function error() {
                    minicartEventDispatchService.publishAddToCartError();
                  }
                );
              }
            } else {
              logService.cartDebug(response);

              minicartEventDispatchService.publishAddToCartError('Invalid minicart response');
              throw 'Invalid minicart response';
            }
          },
          function error(err) {
            logService.cartDebug(err);

            minicartEventDispatchService.publishAddToCartError('Invalid minicart response');
            throw 'Item not added to cart';
          }
        );
      } else {
        deferredResult.resolve();
      }

      return deferredResult.promise;
    }

    function setCallback(callbackFunction) {
      callbacks.push(callbackFunction);
    }

    function runCallbacks(data) {
      if (!!callbacks && callbacks.length > 0) {
        for (var i = 0; i < callbacks.length; i++) {
          var callback = callbacks[i];
          if (!!callback) {
            callback(data);
          }
        }
      }
    }
    

    function showCart(reloadMinicart) {
      $timeout(function () {
        minicartPopupService.showCart(reloadMinicart);
      }, 100);
    }

    function hideCart() {
      minicartPopupService.hideCart();
    }

    function updateMinicartCounter(totalCartQuantity, cartId, initialLoad) {
      cartId = cartId || cartIdService.getCartId();
      minicartCounterService.update(cartId, totalCartQuantity, initialLoad);
    }

    function switchUserCart() {
      var deferredResult = $q.defer();

      if (!$window._lt.user.isLoggedIn) {
        switchUserCartService.setRefreshedCartFlag(false);
      }

      var isRefreshedCart = switchUserCartService.getRefreshedCartFlag();

      // Refresh a cart only one time after user login
      if (
        !!$window._lt &&
        !!$window._lt.user &&
        $window._lt.user.isLoggedIn &&
        (isRefreshedCart == 'false' || isRefreshedCart == undefined)
      ) {
        /* var cartId = cartIdService.getCartId() ? cartIdService.getCartId() : "123";

                        switchUserCartService.switchUserCart(cartId).then(function (response) {
                            if (!!response && !!response.data){
                                cartIdService.setCartId(response.data.cartId);
                                updateMinicartCounter(response.data.totalQuantity, response.data.cartId);
                                switchUserCartService.setRefreshedCartFlag(true);
                                switchUserCartService.deleteAuCartId();

                                $timeout(function(){
                                    deferredResult.resolve();
                                });
                            } else {
                                $timeout(function(){
                                    deferredResult.reject();
                                });

                                logService.cartDebug("Error when switching the cart");
                                logService.cartDebug(response);
                            }

                        }, function (error) {
                            $timeout(function(){
                                deferredResult.reject();
                            });

                            logService.cartDebug("Error when switching the cart");
                            logService.cartDebug(error);
                        });*/
        $timeout(function () {
          deferredResult.resolve();
        });
        switchUserCartService.setRefreshedCartFlag(true);
      } else {
        // To start async
        $timeout(function () {
          deferredResult.resolve();
        });
      }

      return deferredResult.promise;
    }

    function openRFQPopup(squ) {
      requestQuoteService.RFQPopup(squ);
    }

    function showStatus(status) {
      minicartPopupService.showStatus(status);
    }

    function getNumberOfItems() {
      return minicartCounterService.getHeaderTotalItems();
    }

    function goCheckout() {
      var checkoutUrl = utils.getCheckoutLink();

      setTimeout(function () {
        document.location = checkoutUrl;
      }, 200);
    }

    return {
      addToCart: addToCart,
      addProductsToCart: addProductsToCart,
      addAndCheckOutCartAjax: addAndCheckOutCartAjax,
      setCallback: setCallback,
      showCart: showCart,
      hideCart: hideCart,
      updateMinicartCounter: updateMinicartCounter,
      switchUserCart: switchUserCart,
      openRFQPopup: openRFQPopup,
      showStatus: showStatus,
      addToCartAjax: addToCartAjax,
      getNumberOfItems: getNumberOfItems,
      goCheckout: goCheckout,
    };
  }
})(window.minicartApp);

(function(app) {
    "use strict";

    app.run(serviceLocator);

    serviceLocator.$inject = ["minicartService", "logService"];
    function serviceLocator(minicartService, logService){
        window.minicartApp.minicartService = minicartService;

        logService.cartDebug("MINICART SERVICE LOCATED");
        logService.cartDebug(window.minicartApp.minicartService);
    }

}(window.minicartApp));
(function(app) {
    "use strict";
    app.service('requestQuoteService', requestQuoteService);
    requestQuoteService.$inject = ['isoLangService'];
    
    function requestQuoteService(isoLangService) {
        var isoLang = isoLangService.getIsoLang();

        var rfqUrl = '//' + window.location.hostname + '/' + isoLang.iso +'/' + isoLang.lang + '/home/global/forms/product-request-for-quote.html?catalogNumbers=';
        if (window.location.protocol == 'https:') rfqUrl = rfqUrl.replace('http:', 'https:');
        else rfqUrl = rfqUrl.replace('https:', 'http:');        

        function matchLinkToProtocol(matchurl) {
            matchurl = matchurl.replace(/http[s]?/, getProtocol());

            if(matchurl.indexOf(":8080")==-1 && matchurl.indexOf(":8083")==-1){
                if(matchurl.indexOf(":80")!=-1){
                    matchurl = matchurl.replace(":80","");
                }
            }

            return matchurl;
        }

        function getProtocol() {
            return window.location.protocol.replace(/:/g,"");
        }

        function RFQPopup(sku, priceUrl) {
            if (!priceUrl || /#request-quote/.test(priceUrl)) {
                //Closes any open modals
                $j('.modal').modal('hide').remove();

                var url = rfqUrl + sku;
                url = matchLinkToProtocol(url);

                window.location.href = url;
            }
            //For Non-LSG products, if RFQ is clicked from MiniCart or PFP (commerce pod and cross sell both), the configured Url is opened directly. No other check is required.
            else {
                window.location.href = priceUrl;
            }
        }

        return {
            RFQPopup: RFQPopup
        };
    }

})(window.minicartApp);

(function(app) {
	"use strict";

	// This code is to prevent this version of angular from going into a digest loop if url location changed (i.e. React router)
	app.config([
		"$provide",
		function ($provide) {
			$provide.decorator("$browser", [
				"$delegate",
				"$window",
				function ($delegate, $window) {
					$delegate.onUrlChange = function () {};
					var savedUrl = null;
					$delegate.url = function (url) {
						if (!!url) {
							savedUrl = url;
							return $delegate;
						} else {
							return !!savedUrl ? savedUrl : $window.location.href;
						}
					};
					return $delegate;
				}
			]);
		}
	]);
	
    /*
    app.config(['$httpProvider', '$locationProvider', '$logProvider', function ($httpProvider, $locationProvider, $logProvider) {
        //$httpProvider.defaults.withCredentials = true;
        $locationProvider.html5Mode(true);

        $logProvider.debugEnabled(true);
    }]);

    app.config(['$qProvider', function ($qProvider) {
        if(window.jasmine && !!$qProvider.errorOnUnhandledRejections) {
            $qProvider.errorOnUnhandledRejections(false);
        }
    }]);
    app.config(['$httpProvider', function($httpProvider) {
        var interceptor = ['$q', function($q) {

            var service = {

                'request': function(config) {

                    if (config.method) {
                        // the request looks good, so return the config
                        config.headers['Cache-Control'] = 'no-cache';
                        return config;
                    }
                    // bad request, so reject
                    return $q.reject(config);
                }
            };

            return service;
        }];

        $httpProvider.interceptors.push(interceptor);

    }]);*/

}(window.minicartApp));
(function(app) {
    "use strict";

    app.constant("viewports", {
        lg: 1200,
        md: 980,
        sm: 768,
        xs: 480
    }).constant("priceAccessTypes", {
        "orderable": "ORDERABLE",
        "contactUs": "CONTACTUS",
        "requestQuote": "RFQ",
        "learnWhereToBuy": "LEARN_WHERE_TO_BUY",
        "noPrice": "No Price",
        "notOrderable": "PVNO",
        "distributorPrice":"DSVP"
    }).constant("leadTargetTypes", {
        "siebel": "SIEBEL",
        "elms": "ELMS"
    }).constant("apiStatusType", {
        "apiErrorStatus" : "ERROR"
    }).constant("cartEvents", {  // Generic events for minicart and cartlet
        "addToCartBegin": "addToCartBegin",
        "addToCartComplete": "addToCartComplete",
        "minicartError": "minicartError"
    }).constant("minicartPopupEvents", {
        "minicartPopupBegin": "minicartPopupBegin",
        "minicartPopupComplete": "minicartPopupComplete",
        "minicartPopupHide": "minicartPopupHide",
        "minicartPopupError": "minicartPopupError"
    });

})(window.minicartApp);
(function (app) {
  'use strict';
  app.config([
    '$provide',
    function ($provide) {
      //Construct endpointDomain based on environment
      var endpointDomain;
      if (window.environmentURL) {
        endpointDomain = '//' + window.environmentURL.WCMSERVER;
      } else {
        endpointDomain = 'https://www.dev.thermofisher.com';
      }

      var jSessionId = '';

      //Context path
      var contextPath = '/api/store/carts';

      //If you use .push here, we see issues with mappings.withoutPresentation not firing as expected, as data has already been stringified..
      $provide.constant('requests', {
        getMinicart: function (cartId) {
          return {
            method: 'GET',
            url: contextPath + '/' + cartId + '/minicart',
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
            },
          };
        },

        addToCart: {
          method: 'POST',
          withCredentials: true,
          url: endpointDomain + contextPath + '/addToCart',
        },

        addToCartCommerce: {
          method: 'POST',
          withCredentials: true,
          url: '//' + window.location.host + '/index.cfm?fuseaction=customersite.addToCart&JSESSIONID=' + jSessionId,
        },

        switchUserCartObj: function (cartId) {
          var request = {
            method: 'POST',
            url: endpointDomain + contextPath + '/' + cartId + '/switchusercart',
          };
          return request;
        },
      });
    },
  ]);
})(window.minicartApp);

(function(app) {
    "use strict";

    app.controller("cartletController", cartletController);

    cartletController.$inject = [
        "$scope", "$window", "$timeout", "utils", "isoLangService",
        "viewports", "newCartTransformationService", "cartEvents", "logService"
    ];

    function cartletController(
        $scope, $window, $timeout, utils, isoLangService,
        viewports, newCartTransformationService, cartEvents, logService
    ) {

        var cartletRecommendationsEnabled = !!$window.cartletRecommendationsEnabled;
        var cartletRecommendationsMobileEnabled = !!$window.cartletRecommendationsMobileEnabled;
        var cartletHideTimeout = $window.cartletAutoClose || 0;
        var recommendationsVisible = true;

        // Properties
        $scope.cartData = {};
        $scope.lineItems = [];
        $scope.numberOfItemsAdded = 0;
        $scope.isScms = false;
        $scope.errorSku = '';
        $scope.isB2bUser = false;

        // Check whether logged in user is SCMS or not
        if ($window.getCookie('scShipType').toLowerCase() === 'sc'
            && ['cmgtsc', 'scmscfg'].indexOf($window.getCookie('CK_DISPLAY_TYPE')) > -1
        ) {
            $scope.isScms = true;
        }

        $scope.isB2bUser = !!JSON.parse(!!$window._lt.user.isB2BCMGT && $window._lt.user.isB2BCMGT);

        var isoLang = isoLangService.getIsoLang();

        $scope.cartLink = "/store/cart";

        // Methods
        $scope.displayCartData = displayCartData;
        $scope.hideCartlet = hideCartlet;

        // Functions
        function displayCartData(cartRequest, cartResponse){
            $scope.cartData = cartResponse;

            $scope.lineItems = [];
            $scope.numberOfItemsAdded = 0;

            if (!!cartRequest){

                var cartRequestObj;
                try{
                    cartRequestObj = typeof cartRequest == "string" ? JSON.parse(cartRequest) : cartRequest;
                }
                catch(e){ /* catch all */}

                if (!!cartRequestObj &&
                    !!cartRequestObj.lineItems &&
                    !!cartRequestObj.lineItems.length){
                    $scope.numberOfItemsAdded = cartRequestObj.lineItems.length;
                }

                if (!!$scope.cartData &&
                    !!$scope.cartData.lineItems &&
                    !!$scope.cartData.lineItems.length){

                    var numOfLinesToShow = $scope.cartData.lineItems.length >= $scope.numberOfItemsAdded ?
                        $scope.numberOfItemsAdded : $scope.cartData.lineItems.length;

                    numOfLinesToShow = numOfLinesToShow > 2 ? 2 : numOfLinesToShow;

                    $scope.lineItems = $scope.cartData.lineItems.slice(0, numOfLinesToShow);

                    callOffers();
                }
            }

            showCartlet();
        }

        function showCartlet(){
            $(".cartlet").show();
            $("#cartletBlocker").hide();
            $(".cartlet-content").show();
            $("body").css("overflow", "hidden");

            if (!recommendationsVisible && !!cartletHideTimeout){
                $timeout(function(){
                    hideCartlet();
                }, cartletHideTimeout);
            }
        }

        function hideCartlet(){
            $(".cartlet-content").hide();
            $("#cartletBlocker").hide();
            $(".cartlet").hide();
            $("body").css("overflow", "auto");
        }

        function displayBlocker(){
            $(".cartlet").show();
            $("#cartletBlocker").show();
            $(".cartlet-content").hide();
            $("body").css("overflow", "hidden");
        }

        // Shows/hides recommendations based on the viewport size
        // Currently hidden for small and medium
        function execRecommendationsVisibility(){

            var displayType = utils.getViewportSize();
            recommendationsVisible = displayType == viewports.xl || displayType == viewports.lg;

            var $cartletRecommendations = $("#cartletRecommendations");
            if (!!recommendationsVisible){
                $cartletRecommendations.show();
            }
            else{
                $cartletRecommendations.hide();
                $timeout(function(){
                    hideCartlet();
                }, cartletHideTimeout);
            }
        }

        function callOffers() {
            if (!!window.Offers && !!window.Offers.loadCartOverlay)
            {
                if (!!$scope.lineItems && $scope.lineItems.length > 0){
                    var recentItem = $scope.lineItems[0];

                    if (!!recentItem){

                        var price = 0;
                        if (recentItem.price.yourPrice){
                            price = recentItem.price.yourPrice.value;
                        }
                        else if (recentItem.price.onlinePrice){
                            price = recentItem.price.onlinePrice.value;
                        }
                        else if (recentItem.price.listPrice){
                            price = recentItem.price.listPrice.value;
                        }

                        price = normalizePrice(price);

                        if (!$.isNumeric(price)){
                            price = "0.00";
                        }

                        var cartTotal = normalizePrice($scope.cartData.cartSubTotal);

                        if (!$.isNumeric(cartTotal)){
                            cartTotal = "0.00";
                        }

                        var offersPayload = {
                            cartSkus: [{
                                sku: recentItem.product.sku,
                                quantity: recentItem.product.quantity,
                                price: price
                            }],
                            cartTotal: cartTotal,
                            totalQty: $scope.cartData.totalQuantity
                        };

                        try{
                            window.Offers.loadCartOverlay(offersPayload);
                        }
                        catch(e){
                            logService.cartDebug("Error in overlay offers");
                        }
                    }
                }
            }
        }

        // removes all locale formatting leaving just plain 9999.99
        function normalizePrice(price){
            price = "" + price;
            if (!!price.length && price.length > 3){
                if (price[price.length-3] == "," || price[price.length-3] == "."){
                    price = price.substring(0, price.length-3) + "@" + price.substring(price.length-2);
                }

                price = price.replace(/ /g, "");
                price = price.replace(/\,/g, "");
                price = price.replace(/\./g, "");
                price = price.replace(/\@/g, ".");
            }

            return price;
        }

        (function init(){

            var $document = $(document);

            // Listen to begin add to cart event to show blocker and spinner
            $document.on(cartEvents.addToCartBegin, function(e, data){
                if (!!window.cartletEnabled){
				    $scope.$apply(function(){
                        displayBlocker();
                    });
				}
            });

            $document.on(cartEvents.minicartError, function(e){
                hideCartlet();
            });

            // Listen to complete add to cart to show cart contents and recommendations
            $document.on(cartEvents.addToCartComplete, function(e, data){
                if (!!window.cartletEnabled){
                    if (!!data){
                        $scope.$apply(function(){
                            var cartData;
                            $scope.errorSku = data.errorSku;

                            if (!!data && !!data.cartData && !!data.cartData.newCart){
                                cartData = newCartTransformationService.transform(data.cartData);
                                $scope.cartLink = "/store/cart";
                            }
                            else{
                                cartData = data.cartData;

                                // TBD Later
                                //$scope.cartLink = "/order/catalog/" + isoLang.lang + "/" + isoLang.iso.toUpperCase() + "/adirect/lt?cmd=ViewCart&ShoppingCartKey=" + cartData.cartKey;
                                $scope.cartLink = "/order/catalog/en/US/adirect/lt?cmd=ViewCart&ShoppingCartKey=" + cartData.cartKey;
                            }

                            $scope.displayCartData(data.cartRequest, cartData);
                        });
                    }
                }
            });

            // Closes overlay on the outside click
            $document.on("click", function(e){
                var $eventTarget = $(e.target);
                if($eventTarget.closest(".cartlet-content").length == 0) {
                    if ($(".cartlet-upper").is(":visible")){
                        hideCartlet();
                    }
                }
            });

            // Listen to "no recommendations" event and hide the overlay
            $document.on("recommendationsNoResults", function(e){
                $scope.$apply(function(){
                    if (!!cartletHideTimeout){
                        $timeout(function(){
                            var offersElem = document.getElementById("tf-cart-overlay-1");
                            var isOffersEmpty = !!offersElem && !!offersElem.innerHTML;

                            if (!isOffersEmpty){
                                hideCartlet();
                            }
                        }, cartletHideTimeout);
                    }
                });
            });

            // If recommendations are hard disabled in the config
            // remove the element
            if (!cartletRecommendationsEnabled){
                $("#cartletRecommendations").remove();
                recommendationsVisible = false;
            }
            // If recommendations are disabled for mobile and tablet
            // run query and start listening to viewport change event
            else if(!cartletRecommendationsMobileEnabled){
                execRecommendationsVisibility();
                $document.on('viewport-change',function(){
                    $scope.$apply(function(){
                        execRecommendationsVisibility();
                    });
                });
            }

        })();
    }

})(window.minicartApp);

(function(app) {
    "use strict";

    app.controller("minicartController", minicartController);

    minicartController.$inject = ["$scope", "$timeout", "logService",
        "minicartPopupEvents", "cartService", "minicartEventDispatchService",
        "cartIdService", "priceAccessTypes", "leadTargetTypes", "$window", "utils"];

    function minicartController($scope, $timeout, logService,
        minicartPopupEvents, cartService, minicartEventDispatchService,
        cartIdService, priceAccessTypes, leadTargetTypes, $window, utils) {

        // scope variables
        $scope.minicartVisible = false;
        $scope.isLoading = true;
        $scope.checkoutLink = getCheckoutLink();

        $scope.cartRendered = false;
        $scope.cartName = null;
        $scope.isAnonymous = true;
        $scope.subTotal = 0;
        $scope.currencyCode = "USD";
        $scope.error = null;
        $scope.lineItems = [];
        $scope.countryCode = $window.getCookie('CK_ISO_CODE');
        // scope methods
        $scope.loadAndRenderPopup = loadAndRenderPopup;
        $scope.priceAccessTypes = priceAccessTypes;
        $scope.leadTargetTypes = leadTargetTypes;
        $scope.openRFQPopup = openRFQPopup;
        $scope.errorSku = ''; // Skus which got failed to add in cart
        $scope.isScms = false;
        $scope.isB2bUser = false;

        // Implementation
        function showCart() {
            $('#minicart-overlay').show();
            $(".minicart-toggle").addClass("active"); //makes commerce utility bar cart menu item appear active
            $(".dim-background").addClass("active");

            $timeout(function(){
                $("#minicart-items").scrollTop(0);
            }); // We need timeout so angular have time to render line items and only then we can force scroll top

            miniCart.visible = true;
            $scope.minicartVisible = true;

            logService.cartDebug("SHOW CART. Visible - " + $scope.minicartVisible);
        }

        function hideCart(){
            $('#minicart-overlay').hide();
	        $(".minicart-toggle").removeClass("active"); //makes commerce utility bar cart menu item appear un-active
            $(".dim-background").removeClass("active");

            miniCart.visible = false;
            $scope.minicartVisible = false;

            logService.cartDebug("HIDE CART. Visible - " + $scope.minicartVisible);
        }

        function toggleSpinner(on){
            $scope.isLoading = !!on;
        }

        function setStatus(data){
            toggleSpinner(true);
            showCart();
        }

        function loadAndRenderPopup(){
            var cartId = cartIdService.getCartId();
            var resultPromise = cartService.getMinicart(cartId);
            resultPromise.then(function(results){
                if (!!results && !!results.data){
                    var cartData = results.data;
                    renderPopup(cartData);
                }
            });

            return resultPromise;
        }

        function renderPopup(cartData){
            $scope.cartRendered = true;

            $scope.cartName = cartData.cartName;

            if ($scope.cartName.length > 10){
                $scope.cartName = $scope.cartName.substr(0, 10) + '...';
            }

            $scope.isAnonymous = cartData.isAnonymous;
            $scope.subTotal = cartData.subTotal;
            $scope.currencyCode = cartData.currencyCode;
            $scope.error = cartData.error;
            $scope.lineItems = cartData.miniCartItems;
        }

        function getCheckoutLink(){
            var url = utils.getCheckoutLink();
            return url;
        }

        function openRFQPopup(sku){
            miniCart.openRFQPopup(sku);
        }

        (function init(){

            minicartEventDispatchService.subscribe(minicartPopupEvents.minicartPopupBegin, function(data){
                $timeout(function(){
                    showCart(true);
                    toggleSpinner(true);
                });
            });

            minicartEventDispatchService.subscribe(minicartPopupEvents.minicartPopupComplete, function(eventData){
                $timeout(function(){
                    if (!!eventData && !!eventData.noReload && !!$scope.cartRendered){
                        showCart(true);
                        toggleSpinner(false);
                        $scope.errorSku = eventData.errorSku;
                    }
                    else if (!!eventData && !eventData.noReload && !!eventData.cartData){
                        renderPopup(eventData.cartData);

                        showCart(true);
                        toggleSpinner(false);
                        $scope.errorSku = eventData.errorSku;
                    }
                    else{
                        showCart(true);
                        toggleSpinner(true);

                        loadAndRenderPopup().then(function(){
                            toggleSpinner(false);
                        }, function(){
                            toggleSpinner(false);
                        });
                    }
                });
            });

            minicartEventDispatchService.subscribe(minicartPopupEvents.minicartPopupHide, function(){
                $timeout(function(){
                    hideCart();
                });
            });

            $("#miniCartContainer").show();

            // Check whether logged in user is SCMS or not
            if ($window.getCookie('scShipType').toLowerCase() === 'sc'
                && ['cmgtsc', 'scmscfg'].indexOf($window.getCookie('CK_DISPLAY_TYPE')) > -1
            ) {
              $scope.isScms = true;
            }

            $scope.isB2bUser = !!JSON.parse(!!$window._lt.user.isB2BCMGT && $window._lt.user.isB2BCMGT);

        })();
    }

})(window.minicartApp);

(function(app) {
    "use strict";

    // using this directive instead of ng-bind-html-unsafe
    // for newer angular version compatibility
    app.directive('bindHtml', bindHtml);
    
    bindHtml.$inject = [];

    function bindHtml(){
        return {
            restrict: 'A',
            link: function ($scope, $elem, $attrs) {  
                $scope.$watch(function(){
                    return $attrs.bindHtml;
                }, function(){
                    $elem.html($attrs.bindHtml);
                });
            }
        };
        
    }
})(window.minicartApp);

(function(app) {
    "use strict";
    app.directive('omni', omni);
    
    omni.$inject = ["$timeout", "omnitureService"];

    function omni($timeout, omnitureService){
        return {
            restrict: 'A',
            link: function ($scope, $el, $attrs) {  
                            
                $el.on("click", function($e){

                    var action = $attrs.omni;
                    var cartKey = $attrs.omniCartKey;

                    omnitureService.trackEvent(cartKey, action); 
                    
                    var href = $attrs.href;
                    if (!!href){
                        $e.stopPropagation();

                        $timeout(function(){
                            window.location.href = href;                            
                        }, 300);

                        return false;
                    }
                    else{
                        return true;
                    }
                });
            }
        };
        
    }
})(window.minicartApp);

// # Translation Filter

/**
 * @package profile
 * @subpackage filters
 */
(function(app) {
	app.filter('translate',
		['translatorService',
		function(translatorService){
			return function(input) {
				return translatorService(input);
			};
		}
	]);
}(window.minicartApp));

// A filter was not a good choice for translations. A directive may have been more suitable.
// In the end, the translations were pre-built so the choice didn't have any real impact.


// # Internationalization German

/**
 * @package profile
 * @subpackage internationalization
 */

(function (app) {
    app.config(['translatorServiceProvider', function (translatorServiceProvider) {
        translatorServiceProvider.addKeys('de', {

            /* jshint maxlen: false */
            /* jshint strict: false */

            item: "Artikel",
            items: "Items",
            product: "Product",
            products: "Products",
            addedToCart: "Artikel zum Warenkorb hinzugefügt",
            qty: "Anzahl:",
            price: "Preis:",
            yourPrice: "Ihr Preis:",
            subtotal: "Zwischensumme:",
            onlineOffer: "Online offer:",
            seeAllItemsInCart: "See all items in the cart",
            weAreSorry: "We're sorry",

            signIn: "Anmelden",
            yourCart: "Ihr Warenkorb",

            continueShopping: "Weiter einkaufen",
            viewCart: "Warenkorb und Kasse anzeigen",

            contactUs: "Contact us",
            requestQuote: "Request a quote",
            learnWhereToBuy: "Learn where to buy",

            messages: {
                error: "Error occurred!"
            },

            lineItemPresentationAttributes: {
                assayId: "Assay ID",
                geneSymbol: "Gene symbol",
                dyeLabelAndAssayConcentration: "Dye label and assay concentration",
                scale: "Scale",
                availability: "Availability",
                primerID: "Primer ID",
                purification: "Purification",
                synthesisScale: "Synthesis scale",
                assayName: "Assay name",
                aminoAcidChange: "Amino acid change",
                id: "ID",
                species: "Species",
                siRNAId: "siRNA ID",
                size: "Size",
                purity: "Purity",
                assayLocation: "Assay location",
                SNPId: "SNP ID",
                rnaDbID: "RNAdb ID",
                dye: "5' Dye",
                orderName: "Order name",
                oligoName: "Oligo name",
                oligoId: "Oligo ID",
                format: "Format",
                sequence: "Sequence",
                viewMore: "View more",
                researcherName: "Researcher name",
                geneSymbolRNAdbId: "Gene symbol/RNAdb ID",
                beadType: "Bead type",
                proteinPanel: "Protein/Panel",
                volume: "Volume",
                sizePurity: "Size/Purity"

            },

            minicart: {
                cartSummary: "Cart summary",
                viewCart: "Warenkorb und Kasse anzeigen",
                cartNameLabel: "Recently added to the",
                subTotal: "Zwischensumme",
                yourPrice: "Ihr Preis",
                currency: "Currency",
                minicartProduct: "Product",
                quantity: "Anzahl",
                total: "Total",
                catalogNumber: "Katalognummer",
                listPrice: "Preis",
                yourPrice: "Ihr Preis",
                signIn: "Anmelden",
                id: "ID",
                projectId: "Project Id",
                projectName: "Project Name"
            }

        });
    }]);
})(window.minicartApp);

// # Internationalization English

/**
 * @package profile
 * @subpackage internationalization
 */

(function (app) {
    app.config(['translatorServiceProvider', function (translatorServiceProvider) {
        translatorServiceProvider.addKeys('en', {

            /* jshint maxlen: false */
            /* jshint strict: false */

            item: "Item",
            items: "Items",
            product: "Product",
            products: "Products",
            addedToCart: "added to the cart",
            qty: "Qty:",
            price: "Price:",
            yourPrice: "Your price:",
            subtotal: "Subtotal:",
            onlineOffer: "Online offer:",
            seeAllItemsInCart: "See all items in the cart",
            weAreSorry: "We're sorry",

            signIn: "Sign In",
            yourCart: "Your cart",

            continueShopping: "Continue shopping",
            viewCart: "View cart & checkout",

            contactUs: "Contact us",
            requestQuote: "Request a quote",
            learnWhereToBuy: "Learn where to buy",

            messages: {
                error: "Error occurred!",
                warning: "Warning",
                warningMessage: ' cannot be added to the cart. Current Supply Center does not allow out of stock item to be added'
            },

            lineItemPresentationAttributes: {
                assayId: "Assay ID",
                geneSymbol: "Gene symbol",
                dyeLabelAndAssayConcentration: "Dye label and assay concentration",
                scale: "Scale",
                availability: "Availability",
                primerID: "Primer ID",
                purification: "Purification",
                synthesisScale: "Synthesis scale",
                assayName: "Assay name",
                aminoAcidChange: "Amino acid change",
                id: "ID",
                species: "Species",
                siRNAId: "siRNA ID",
                size: "Size",
                purity: "Purity",
                assayLocation: "Assay location",
                SNPId: "SNP ID",
                rnaDbID: "RNAdb ID",
                dye: "5' Dye",
                orderName: "Order name",
                oligoName: "Oligo name",
                oligoId: "Oligo ID",
                format: "Format",
                sequence: "Sequence",
                viewMore: "View more",
                researcherName: "Researcher name",
                geneSymbolRNAdbId: "Gene symbol/RNAdb ID",
                beadType: "Bead type",
                proteinPanel: "Protein/Panel",
                volume: "Volume",
                sizePurity: "Size/Purity"

            },

            minicart: {
                cartSummary: "Cart summary",
                viewCart: "View cart &amp; checkout",
                cartNameLabel: "Recently added to the",
                subTotal: "Subtotal",
                yourPrice: "Your price",
                currency: "Currency",
                minicartProduct: "Product",
                quantity: "Qty",
                total: "Total",
                catalogNumber: "Catalog number",
                listPrice: "Price",
                signIn: "sign in",
                id: "ID",
                projectId: "Project Id",
                projectName: "Project Name"
            }

        });
    }]);
})(window.minicartApp);

// # Internationalization Spanish

/**
 * @package profile
 * @subpackage internationalization
 */

(function (app) {
    app.config(['translatorServiceProvider', function (translatorServiceProvider) {
        translatorServiceProvider.addKeys('es', {

            /* jshint maxlen: false */
            /* jshint strict: false */

            item: "Artículo",
            items: "Items",
            product: "Product",
            products: "Products",
            addedToCart: "Artículo(s) añadido(s) a la cesta",
            qty: "Cantidad:",
            price: "Precio:",
            yourPrice: "Su precio:",
            subtotal: "Total parcial:",
            onlineOffer: "Online offer:",
            seeAllItemsInCart: "See all items in the cart",
            weAreSorry: "We're sorry",

            signIn: "Iniciar sesión",
            yourCart: "Su cesta de compras",

            continueShopping: "Seguir comprando",
            viewCart: "Ver la cesta y pago",

            contactUs: "Contact us",
            requestQuote: "Request a quote",
            learnWhereToBuy: "Learn where to buy",

            messages: {
                error: "Error occurred!"
            },

            lineItemPresentationAttributes: {
                assayId: "Assay ID",
                geneSymbol: "Gene symbol",
                dyeLabelAndAssayConcentration: "Dye label and assay concentration",
                scale: "Scale",
                availability: "Availability",
                primerID: "Primer ID",
                purification: "Purification",
                synthesisScale: "Synthesis scale",
                assayName: "Assay name",
                aminoAcidChange: "Amino acid change",
                id: "ID",
                species: "Species",
                siRNAId: "siRNA ID",
                size: "Size",
                purity: "Purity",
                assayLocation: "Assay location",
                SNPId: "SNP ID",
                rnaDbID: "RNAdb ID",
                dye: "5' Dye",
                orderName: "Order name",
                oligoName: "Oligo name",
                oligoId: "Oligo ID",
                format: "Format",
                sequence: "Sequence",
                viewMore: "View more",
                researcherName: "Researcher name",
                geneSymbolRNAdbId: "Gene symbol/RNAdb ID",
                beadType: "Bead type",
                proteinPanel: "Protein/Panel",
                volume: "Volume",
                sizePurity: "Size/Purity"

            },

            minicart: {
                cartSummary: "Cart summary",
                viewCart: "Ver la cesta y pago",
                cartNameLabel: "Recently added to the",
                subTotal: "Total parcial",
                yourPrice: "Su precio",
                currency: "Currency",
                minicartProduct: "Product",
                quantity: "Cantidad",
                total: "Total",
                catalogNumber: "Numero de catalogo",
                listPrice: "Precio",
                yourPrice: "Su precio",
                signIn: "Iniciar sesión",
                id: "ID",
                projectId: "Project Id",
                projectName: "Project Name"
            }

        });
    }]);
})(window.minicartApp);

// # Internationalization French

/**
 * @package profile
 * @subpackage internationalization
 */

(function (app) {
    app.config(['translatorServiceProvider', function (translatorServiceProvider) {
        translatorServiceProvider.addKeys('fr', {

            /* jshint maxlen: false */
            /* jshint strict: false */

            item: "Article",
            items: "Items",
            product: "Product",
            products: "Products",
            addedToCart: "Article ajouté au panier",
            qty: "Qté:",
            price: "Prix:",
            yourPrice: "Votre prix:",
            subtotal: "Sous-total:",
            onlineOffer: "Online offer:",
            seeAllItemsInCart: "See all items in the cart",
            weAreSorry: "We're sorry",

            signIn: "Se connecter",
            yourCart: "Votre panier",

            continueShopping: "Continuez vos achats",
            viewCart: "Voir le panier et commander",

            contactUs: "Contact us",
            requestQuote: "Request a quote",
            learnWhereToBuy: "Learn where to buy",

            messages: {
                error: "Error occurred!"
            },

            lineItemPresentationAttributes: {
                assayId: "Assay ID",
                geneSymbol: "Gene symbol",
                dyeLabelAndAssayConcentration: "Dye label and assay concentration",
                scale: "Scale",
                availability: "Availability",
                primerID: "Primer ID",
                purification: "Purification",
                synthesisScale: "Synthesis scale",
                assayName: "Assay name",
                aminoAcidChange: "Amino acid change",
                id: "ID",
                species: "Species",
                siRNAId: "siRNA ID",
                size: "Size",
                purity: "Purity",
                assayLocation: "Assay location",
                SNPId: "SNP ID",
                rnaDbID: "RNAdb ID",
                dye: "5' Dye",
                orderName: "Order name",
                oligoName: "Oligo name",
                oligoId: "Oligo ID",
                format: "Format",
                sequence: "Sequence",
                viewMore: "View more",
                researcherName: "Researcher name",
                geneSymbolRNAdbId: "Gene symbol/RNAdb ID",
                beadType: "Bead type",
                proteinPanel: "Protein/Panel",
                volume: "Volume",
                sizePurity: "Size/Purity"

            },

            minicart: {
                cartSummary: "Cart summary",
                viewCart: "Voir le panier et commander",
                cartNameLabel: "Recently added to the",
                subTotal: "Sous-total",
                yourPrice: "Votre prix",
                currency: "Currency",
                minicartProduct: "Product",
                quantity: "Qté",
                total: "Total",
                catalogNumber: "Numéro de catalogue",
                listPrice: "Prix",
                yourPrice: "Votre prix",
                signIn: "Se connecter",
                id: "ID",
                projectId: "Project Id",
                projectName: "Project Name"
            }

        });
    }]);
})(window.minicartApp);

// # Internationalization Japanese

/**
 * @package profile
 * @subpackage internationalization
 */

(function (app) {
    app.config(['translatorServiceProvider', function (translatorServiceProvider) {
        translatorServiceProvider.addKeys('ja', {

            /* jshint maxlen: false */
            /* jshint strict: false */

            item: "製品",
            items: "製品",
            product: "製品",
            products: "製品",
            addedToCart: "がカートに追加されました。",
            qty: "数量：",
            price: "価格：",
            yourPrice: "販売価格：",
            subtotal: "小計：",
            onlineOffer: "オンライン限定価格：",
            seeAllItemsInCart: "カート内のすべての製品をご確認ください。",
            weAreSorry: "申し訳ありません",

            signIn: "サインイン",
            yourCart: "カート",

            continueShopping: "買い物を続ける",
            viewCart: "カートを見る",

            contactUs: "お問い合わせ",
            requestQuote: "見積もりを依頼",
            learnWhereToBuy: "代理店を探す",

            messages: {
                error: "エラーが発生しました"
            },

            lineItemPresentationAttributes: {
                assayId: "アッセイ ID",
                geneSymbol: "遺伝子記号",
                dyeLabelAndAssayConcentration: "色素ラベルおよびアッセイ濃度",
                scale: "スケール",
                availability: "在庫状況",
                primerID: "プライマー ID",
                purification: "精製",
                synthesisScale: "合成スケール",
                assayName: "アッセイ名",
                aminoAcidChange: "アミノ酸変更",
                id: "ID",
                species: "生物種",
                siRNAId: "siRNA ID",
                size: "サイズ",
                purity: "純度",
                assayLocation: "アッセイロケーション",
                SNPId: "SNP ID",
                rnaDbID: "RNAdb ID",
                dye: "5' 色素",
                orderName: "ご注文名",
                oligoName: "オリゴ名",
                oligoId: "オリゴ ID",
                format: "フォーマット",
                sequence: "シーケンス",
                viewMore: "詳細を見る",
                researcherName: "研究者名",
                geneSymbolRNAdbId: "遺伝子記号／RNAdb ID",
                beadType: "ビーズタイプ",
                proteinPanel: "タンパク質／パネル",
                volume: "容量",
                sizePurity: "サイズ／純度"

            },

            minicart: {
                cartSummary: "カート合計",
                viewCart: "カートを見る",
                cartNameLabel: "に追加されました。",
                subTotal: "小計",
                yourPrice: "販売価格",
                currency: "通貨",
                minicartProduct: "製品",
                quantity: "数量",
                total: "合計",
                catalogNumber: "製品番号（カタログ番号）",
                listPrice: "標準価格",
                yourPrice: "販売価格",
                signIn: "サインイン",
                id: "ID",
                projectId: "Project Id",
                projectName: "Project Name"
            }

        });
    }]);
})(window.minicartApp);

// # Internationalization Korean

/**
 * @package profile
 * @subpackage internationalization
 */

(function (app) {
    app.config(['translatorServiceProvider', function (translatorServiceProvider) {
        translatorServiceProvider.addKeys('ko', {

            /* jshint maxlen: false */
            /* jshint strict: false */

            item: "제품",
            items: "항목",
            product: "제품",
            products: "제품",
            addedToCart: "품목이 카트에 추가되었습니다.",
            qty: "수량:",
            price: "제품 정가:",
            yourPrice: "공급가:",
            subtotal: "합계:",
            onlineOffer: "온라인 행사:",
            seeAllItemsInCart: "카트의 모든 항목을 확인합니다",
            weAreSorry: "죄송합니다",

            signIn: "로그인",
            yourCart: "카트 요약",

            continueShopping: "계속 쇼핑하기",
            viewCart: "카트 보기 & 결제 하기",

            contactUs: "문의하기",
            requestQuote: "견적 요청",
            learnWhereToBuy: "구매처 알아보기",

            messages: {
                error: "오류가 발생했습니다!"
            },

            lineItemPresentationAttributes: {
                assayId: "Assay ID",
                geneSymbol: "유전자 기호",
                dyeLabelAndAssayConcentration: "염료 라벨 및 Assay 농도",
                scale: "스케일",
                availability: "재고 정보",
                primerID: "프라이머 ID",
                purification: "정제",
                synthesisScale: "합성 스케일",
                assayName: "Assay 이름",
                aminoAcidChange: "아미노산 변경",
                id: "ID",
                species: "종",
                siRNAId: "siRNA ID",
                size: "크기",
                purity: "순도",
                assayLocation: "Assay 위치",
                SNPId: "SNP ID",
                rnaDbID: "RNAdb ID",
                dye: "5' 염료",
                orderName: "주문 이름",
                oligoName: "올리고(Oligo) 이름",
                oligoId: "올리고(Oligo) ID",
                format: "형식",
                sequence: "염기 서열",
                viewMore: "더 보기",
                researcherName: "연구자 이름",
                geneSymbolRNAdbId: "유전자 기호/RNAdb ID",
                beadType: "비드(bead) 유형",
                proteinPanel: "단백질/패널",
                volume: "용량",
                sizePurity: "사이즈/순도"

            },

            minicart: {
                cartSummary: "카트 요약",
                viewCart: "카트 보기 & 결제 하기",
                cartNameLabel: "최근 추가 대상",
                subTotal: "합계",
                yourPrice: "공급가",
                currency: "통화",
                minicartProduct: "제품",
                quantity: "수량",
                total: "전체",
                catalogNumber: "카탈로그 번호",
                listPrice: "제품 정가",
                yourPrice: "공급가",
                signIn: "로그인",
                id: "ID",
                projectId: "Project Id",
                projectName: "Project Name"
            }

        });
    }]);
})(window.minicartApp);

// # Internationalization Traditional Chinese

/**
 * @package profile
 * @subpackage internationalization
 */

(function (app) {
    app.config(['translatorServiceProvider', function (translatorServiceProvider) {
        translatorServiceProvider.addKeys('tw', {

            /* jshint maxlen: false */
            /* jshint strict: false */

            item: "件商品",
            items: "Items",
            product: "Product",
            products: "Products",
            addedToCart: "已經添加到購物車",
            qty: "數量:",
            price: "價格:",
            yourPrice: "你的價格:",
            subtotal: "小計:",
            onlineOffer: "Online offer:",
            seeAllItemsInCart: "See all items in the cart",
            weAreSorry: "We're sorry",

            signIn: "登入",
            yourCart: "你的購物車",

            continueShopping: "繼續購物",
            viewCart: "查看購物車和結賬",

            contactUs: "Contact us",
            requestQuote: "Request a quote",
            learnWhereToBuy: "Learn where to buy",

            messages: {
                error: "Error occurred!"
            },

            lineItemPresentationAttributes: {
                assayId: "Assay ID",
                geneSymbol: "Gene symbol",
                dyeLabelAndAssayConcentration: "Dye label and assay concentration",
                scale: "Scale",
                availability: "Availability",
                primerID: "Primer ID",
                purification: "Purification",
                synthesisScale: "Synthesis scale",
                assayName: "Assay name",
                aminoAcidChange: "Amino acid change",
                id: "ID",
                species: "Species",
                siRNAId: "siRNA ID",
                size: "Size",
                purity: "Purity",
                assayLocation: "Assay location",
                SNPId: "SNP ID",
                rnaDbID: "RNAdb ID",
                dye: "5' Dye",
                orderName: "Order name",
                oligoName: "Oligo name",
                oligoId: "Oligo ID",
                format: "Format",
                sequence: "Sequence",
                viewMore: "View more",
                researcherName: "Researcher name",
                geneSymbolRNAdbId: "Gene symbol/RNAdb ID",
                beadType: "Bead type",
                proteinPanel: "Protein/Panel",
                volume: "Volume",
                sizePurity: "Size/Purity"

            },

            minicart: {
                cartSummary: "Cart summary",
                viewCart: "查看購物車和結賬",
                cartNameLabel: "Recently added to the",
                subTotal: "小計",
                yourPrice: "你的價格",
                currency: "Currency",
                minicartProduct: "Product",
                quantity: "數量",
                total: "Total",
                catalogNumber: "目錄號",
                listPrice: "價格",
                yourPrice: "你的價格",
                signIn: "登入",
                id: "ID",
                projectId: "Project Id",
                projectName: "Project Name"
            }

        });
    }]);
})(window.minicartApp);

// # Internationalization Chinese-Simplified

/**
 * @package profile
 * @subpackage internationalization
 */

(function (app) {
    app.config(['translatorServiceProvider', function (translatorServiceProvider) {
        translatorServiceProvider.addKeys('zh', {

            /* jshint maxlen: false */
            /* jshint strict: false */

            item: "产品",
            items: "产品",
            product: "产品",
            products: "产品",
            addedToCart: "已添加至购物车",
            qty: "数量:",
            price: "价格:",
            yourPrice: "您的价格：",
            subtotal: "小计：",
            onlineOffer: "网络直购价:",
            seeAllItemsInCart: "See all items in the cart",
            weAreSorry: "\u62b1\u6b49",

            signIn: "登录",
            yourCart: "您的购物车",

            continueShopping: "继续购物",
            viewCart: "浏览购物车",

            contactUs: "联系我们",
            requestQuote: "询价",
            learnWhereToBuy: "了解购买地点",

            messages: {
                error: "错误!"
            },

            minicart: {
                cartSummary: "购物车摘要",
                viewCart: "浏览购物车",
                cartNameLabel: "最近添加",
                subTotal: "小计：",
                yourPrice: "您的价格：",
                currency: "Currency",
                minicartProduct: "产品",
                quantity: "数量",
                total: "总计",
                catalogNumber: "货号",
                listPrice: "价格",
                signIn: "登录",
                id: "ID",
                projectId: "Project Id",
                projectName: "Project Name"
            }

        });
    }]);
})(window.minicartApp);
