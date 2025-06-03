// define({ 
//     setCurrencyRates:function(currencyList){
//         this.currencyRates = currencyList;
//     },
//     getCurrencyRates:function(){
//         return this.currencyRates;
//     },
//     init: function() {
//       var currencyRates = [];  
//     this.view.tbxMoney.onTextChange = this.tbxMoneyOnChange;
//     this.view.selectCurrencySeg.onSwipe = this.selectCurrencySegOnDraq;
//     this.fetchData();
       

//     },
//     selectCurrencySegOnDraq: async function(seguiWidget, sectionIndex, rowIndex, selectionState) {
//         try {
//             console.log("rowIndex:" + rowIndex);
//             console.log("sectionIndex:" + sectionIndex);
//             console.log("selectionState:" + selectionState);
    
//             var currName = this.view.selectCurrencySeg.data[rowIndex].imgCurr.slice(0, 3).toUpperCase();
//             console.log(currName);
    
//             var url = "https://v6.exchangerate-api.com/v6/"+APIKEY+"/latest/" + currName;
    
//             var availableCurrencies = {
//                 "Egyptian Pound": "egp",
//                 "Canadian Dollar": "cad",
//                 "Swiss Franc": "chf",
//                 "US Dollar": "usd",
//                 "Kuwaiti Dinar": "kwd",
//                 "Japanese Yen": "jpy"
//             };
    
//             kony.model.ApplicationContext.showLoadingScreen("Loading");
    
//             const makeRequest = (url) => {
//                 return new Promise((resolve, reject) => {
//                     var xhr = new kony.net.HttpRequest();
//                     xhr.open("GET", url);
//                     xhr.onReadyStateChange = function () {
//                         if (xhr.readyState === 4) {
//                             if (xhr.status === 200) {
//                                 resolve(JSON.parse(xhr.responseText));
//                             } else {
//                                 reject({ status: xhr.status, response: xhr.responseText });
//                             }
//                         }
//                     };
//                     xhr.send();
//                 });
//             };
//             let data1 = await makeRequest(url);
//             console.log("✅ Data fetched:", data1);
//             var data = data1.conversion_rates;
    
//             this.setCurrencyRates(data);
//             this.view.lblCurrSymbol.text = currName;
//             this.view.lblCurrName.text = Object.keys(availableCurrencies).find(key => availableCurrencies[key] === currName.toLowerCase());
    
//             this.view.currConvSeg.removeAll();
    
//             for (let code in data) {
//                 try {
//                     if (Object.keys(availableCurrencies).find(key => availableCurrencies[key] === code.toLowerCase())) {
//                         this.view.currConvSeg.addDataAt({
//                             imgCurr: code.toLowerCase() + ".png",
//                             lblConvertedMoney: (Math.floor(parseFloat(data[code]) * 100) / 100).toString(),
//                             lblCurrNameS: Object.keys(availableCurrencies).find(key => availableCurrencies[key] === code.toLowerCase()),
//                             lblCurrSymbolS: code.toUpperCase()
//                         }, 0, 0);
//                     }
//                 } catch (e) {
//                     console.log("Segment loop error:", e);
//                     if (Object.keys(availableCurrencies).find(key => availableCurrencies[key] === code.toLowerCase())) {
//                         this.view.currConvSeg.addDataAt({
//                             lblConvertedMoney: (Math.floor(parseFloat(data[code]) * 100) / 100).toString(),
//                             lblCurrNameS: Object.keys(availableCurrencies).find(key => availableCurrencies[key] === code.toLowerCase()),
//                             lblCurrSymbolS: code.toUpperCase()
//                         }, 0, 0);
//                     }
//                 }
//             }
//             this.view.tbxMoney.text = "1.00";
//             kony.model.ApplicationContext.dismissLoadingScreen();
//         } catch (e) {
//             console.log("Error in selectCurrencySegOnDraq:", e);
//             kony.model.ApplicationContext.dismissLoadingScreen();
//         }
//     },
    
//     tbxMoneyOnChange: function(e){
//         var data = this.getCurrencyRates();
//         var availableCurrencies = {
//             "Egyptian Pound":"egp",
//             "Canadian Dollar":"cad",
//             "Swiss Franc":"chf",
//             "US Dollar":"usd",
//             "Kuwaiti Dinar":"kwd",
//             "Japanese Yen":"jpy"
//         };
//         this.view.currConvSeg.removeAll();
//         for(let code in data){
//             var newAmount = parseFloat(data[code])*parseFloat(this.view.tbxMoney.text);

//             try{
//                 if(Object.keys(availableCurrencies).find(key => availableCurrencies[key] === code.toLowerCase())){
//             this.view.currConvSeg.addDataAt({
//                 imgCurr:code.toLowerCase()+".png",
//                 lblConvertedMoney:(Math.floor(newAmount*100)/100).toString(),
//                 lblCurrNameS:Object.keys(availableCurrencies).find(key => availableCurrencies[key] === code.toLowerCase()),
//                 lblCurrSymbolS:code.toUpperCase()
//             },0,0);
//         }
//             }catch(e){
//                 if(Object.keys(availableCurrencies).find(key => availableCurrencies[key] === code.toLowerCase())){

//                 this.view.currConvSeg.addDataAt({
//                     // imgCurr:code.toLowerCase()+".png",
//                     lblConvertedMoney:(Math.floor(parseInt(data[code])*parseInt(this.view.tbxMoney.text)*100)/100).toString(),
//                     lblCurrNameS:Object.keys(availableCurrencies).find(key => availableCurrencies[key] === code.toLowerCase()),
//                     lblCurrSymbolS:code.toUpperCase()
//                 },0,0);
//                 console.log(e);}
//             }
//         }
//       },
//     preshow: function() {
        

//     },
//     fetchData: async function () {
//         try {
//             var availableCurrencies = {
//                 "Egyptian Pound": "egp",
//                 "Canadian Dollar": "cad",
//                 "Swiss Franc": "chf",
//                 "US Dollar": "usd",
//                 "Kuwaiti Dinar": "kwd",
//                 "Japanese Yen": "jpy"
//             };
    
//             var url = "https://v6.exchangerate-api.com/v6/"+APIKEY+"/latest/USD";
//             kony.model.ApplicationContext.showLoadingScreen("Loading");
    
//             const makeRequest = (url) => {
//                 return new Promise((resolve, reject) => {
//                     var xhr = new kony.net.HttpRequest();
//                     xhr.open("GET", url);
//                     xhr.onReadyStateChange = function () {
//                         if (xhr.readyState === 4) {
//                             if (xhr.status === 200) {
//                                 resolve(JSON.parse(xhr.responseText));
//                             } else {
//                                 reject({ status: xhr.status, response: xhr.responseText });
//                             }
//                         }
//                     };
//                     xhr.send();
//                 });
//             };
    
//             let data1 = await makeRequest(url);
//             let data = data1.conversion_rates;
//             this.setCurrencyRates(data);
//             this.view.currConvSeg.removeAll();
    
//             for (let code in data) {
//                 try {
//                     if (Object.keys(availableCurrencies).find(key => availableCurrencies[key] === code.toLowerCase())) {
//                         this.view.currConvSeg.addDataAt({
//                             imgCurr: code.toLowerCase() + ".png",
//                             lblConvertedMoney: (Math.floor(parseFloat(data[code]) * 100) / 100).toString(),
//                             lblCurrNameS: Object.keys(availableCurrencies).find(key => availableCurrencies[key] === code.toLowerCase()),
//                             lblCurrSymbolS: code.toUpperCase()
//                         }, 0, 0);
//                     }
//                 } catch (e) {
//                     if (Object.keys(availableCurrencies).find(key => availableCurrencies[key] === code.toLowerCase())) {
//                         this.view.currConvSeg.addDataAt({
//                             lblConvertedMoney: (Math.floor(parseFloat(data[code]) * 100) / 100).toString(),
//                             lblCurrNameS: Object.keys(availableCurrencies).find(key => availableCurrencies[key] === code.toLowerCase()),
//                             lblCurrSymbolS: code.toUpperCase()
//                         }, 0, 0);
//                     }
//                     kony.print(e);
//                 }
//             }
    
//             kony.model.ApplicationContext.dismissLoadingScreen();
//         } catch (e) {
//             kony.print(" Error in fetchData: " + JSON.stringify(e));
//             kony.model.ApplicationContext.dismissLoadingScreen();
//         }
//     }
    
//     });
define({
    setCurrencyRates: function(currencyList) {
        this.currencyRates = currencyList;
    },
    getCurrencyRates: function() {
        return this.currencyRates;
    },
    init: function() {
        this.view.tbxMoney.onTextChange = this.tbxMoneyOnChange;
        this.view.selectCurrencySeg.onSwipe = this.selectCurrencySegOnDraq;
        this.fetchData();
    },
   
    selectCurrencySegOnDraq: async function(seguiWidget, sectionIndex, rowIndex, selectionState) {
        try {
            var currName = this.view.selectCurrencySeg.data[rowIndex].imgCurr.slice(0, 3).toUpperCase();
            var url = "https://v6.exchangerate-api.com/v6/"+APIKEY+"/latest/" + currName;

            var availableCurrencies = {
                "Egyptian Pound": "egp",
                "Canadian Dollar": "cad",
                "Swiss Franc": "chf",
                "US Dollar": "usd",
                "Kuwaiti Dinar": "kwd",
                "Japanese Yen": "jpy"
            };

            kony.model.ApplicationContext.showLoadingScreen("Loading");

            const makeRequest = (url) => {
                return new Promise((resolve, reject) => {
                    var xhr = new kony.net.HttpRequest();
                    xhr.open("GET", url);
                    xhr.onReadyStateChange = function() {
                        if (xhr.readyState === 4) {
                            if (xhr.status === 200) {
                                resolve(JSON.parse(xhr.responseText));
                            } else {
                                reject({ status: xhr.status, response: xhr.responseText });
                            }
                        }
                    };
                    xhr.send();
                });
            };

            let data1 = await makeRequest(url);
            var data = data1.conversion_rates;

            this.setCurrencyRates(data);
            this.view.lblCurrSymbol.text = currName;
            this.view.lblCurrName.text = Object.keys(availableCurrencies).find(key => availableCurrencies[key] === currName.toLowerCase());

            this.view.currConvSeg.removeAll();

            for (let code in data) {
                if (Object.keys(availableCurrencies).find(key => availableCurrencies[key] === code.toLowerCase())) {
                    this.view.currConvSeg.addDataAt({
                        imgCurr: code.toLowerCase() + ".png",
                        lblConvertedMoney: (Math.floor(parseFloat(data[code]) * 100) / 100).toString(),
                        lblCurrNameS: Object.keys(availableCurrencies).find(key => availableCurrencies[key] === code.toLowerCase()),
                        lblCurrSymbolS: code.toUpperCase()
                    }, 0, 0);
                }
            }

            this.view.tbxMoney.text = "1.00";
            kony.model.ApplicationContext.dismissLoadingScreen();
        } catch (e) {
            console.log("Error in selectCurrencySegOnDraq:", e);
            kony.model.ApplicationContext.dismissLoadingScreen();
        }
    },
    tbxMoneyOnChange: function(e) {
        var data = this.getCurrencyRates();
        var amount = parseFloat(this.view.tbxMoney.text);

        if (isNaN(amount) || amount <= 0) {
            this.view.tbxMoney.text = "1.00";
            amount = parseFloat(this.view.tbxMoney.text);
        kony.ui.Alert("Please enter a valid positive number");
        }

        var availableCurrencies = {
            "Egyptian Pound": "egp",
            "Canadian Dollar": "cad",
            "Swiss Franc": "chf",
            "US Dollar": "usd",
            "Kuwaiti Dinar": "kwd",
            "Japanese Yen": "jpy"
        };

        this.view.currConvSeg.removeAll();

        for (let code in data) {
            if (Object.keys(availableCurrencies).find(key => availableCurrencies[key] === code.toLowerCase())) {
                var newAmount = Math.floor(parseFloat(data[code]) * amount * 100) / 100;
                this.view.currConvSeg.addDataAt({
                    imgCurr: code.toLowerCase() + ".png",
                    lblConvertedMoney: newAmount.toString(),
                    lblCurrNameS: Object.keys(availableCurrencies).find(key => availableCurrencies[key] === code.toLowerCase()),
                    lblCurrSymbolS: code.toUpperCase()
                }, 0, 0);
            }
        }
    },
    preshow: function() {},
    fetchData: async function() {
        try {
            var availableCurrencies = {
                "Egyptian Pound": "egp",
                "Canadian Dollar": "cad",
                "Swiss Franc": "chf",
                "US Dollar": "usd",
                "Kuwaiti Dinar": "kwd",
                "Japanese Yen": "jpy"
            };

            var url = "https://v6.exchangerate-api.com/v6/"+APIKEY+"/latest/USD";
            kony.model.ApplicationContext.showLoadingScreen("Loading");

            const makeRequest = (url) => {
                return new Promise((resolve, reject) => {
                    var xhr = new kony.net.HttpRequest();
                    xhr.open("GET", url);
                    xhr.onReadyStateChange = function() {
                        if (xhr.readyState === 4) {
                            if (xhr.status === 200) {
                                resolve(JSON.parse(xhr.responseText));
                            } else {
                                reject({ status: xhr.status, response: xhr.responseText });
                            }
                        }
                    };
                    xhr.send();
                });
            };

            let data1 = await makeRequest(url);
            let data = data1.conversion_rates;

            this.setCurrencyRates(data);
            this.view.currConvSeg.removeAll();

            for (let code in data) {
                if (Object.keys(availableCurrencies).find(key => availableCurrencies[key] === code.toLowerCase())) {
                    this.view.currConvSeg.addDataAt({
                        imgCurr: code.toLowerCase() + ".png",
                        lblConvertedMoney: (Math.floor(parseFloat(data[code]) * 100) / 100).toString(),
                        lblCurrNameS: Object.keys(availableCurrencies).find(key => availableCurrencies[key] === code.toLowerCase()),
                        lblCurrSymbolS: code.toUpperCase()
                    }, 0, 0);
                }
            }

            this.view.tbxMoney.text = "1.00";
            kony.model.ApplicationContext.dismissLoadingScreen();
        } catch (e) {
            kony.print("Error in fetchData: " + JSON.stringify(e));
            kony.model.ApplicationContext.dismissLoadingScreen();
        }
    }
});
