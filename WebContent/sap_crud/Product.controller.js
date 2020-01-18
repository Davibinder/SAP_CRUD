sap.ui.controller("sap_crud.Product", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sap_crud.Product
*/
	onInit: function() {
		var oModel = sap.ui.model.odata.ODataModel("proxy/http/services.odata.org/V3/(S(g5tlvzu5xgdtucbt0d3bmeyz))/OData/OData.svc");
		oModel.oHeaders = {
			"DataServiceVersion" : '3.0',
			"MaxDataServiceVersion" : '3.0',
		}
		sap.ui.getCore().setModel(oModel,"products");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sap_crud.Product
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sap_crud.Product
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sap_crud.Product
*/
//	onExit: function() {
//
//	}
	
	create : function() {
		
	},
	
	edit : function() {
		
	},
	
	remove : function() {
		
	},
	
	save : function() {
		
	},
	
	

});