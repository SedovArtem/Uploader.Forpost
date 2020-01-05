let ProductCard = {
    Name: "#w0 > tbody > tr:nth-child(1)",
    Parameters: {
       AllElement: "#w0 > tbody > tr:nth-child(2)",
       ProductParams: "#w0 > tbody > tr:nth-child(2) > td > div > div"
    },
    DiscriptionOwner: {
        AllElement: '#w0 > tbody > tr:nth-child(3)'
    },
    DiscriptionRZ: "#w0 > tbody > tr:nth-child(4)",
    Price: {
        AllElement: "#w0 > tbody > tr:nth-child(5)"
    },
    Vendors: "#w0 > tbody > tr:nth-child(6)",
    State: "#w0 > tbody > tr:nth-child(7)",
    AdditionalText: "#w0 > tbody > tr:nth-child(8)",
    ShippingAndPayment: "#w0 > tbody > tr:nth-child(9)",
    Article: {
        AllElement: "#w0 > tbody > tr:nth-child(10)"
    },
    EAN: {
        AllElement: "#w0 > tbody > tr:nth-child(11)"
    },
    Photo: "#w0 > tbody > tr:nth-child(12)",
    ActionsButtons: "#w0 > tbody > tr:nth-child(13)"
};

let ProductSyncSources = {
    ProductInfo: {
        AllElement: "#sync-sources-container > table > tbody > tr",
        CheckBox: "#sync-sources-container > table > tbody > tr > td.skip-export.kv-align-center.kv-align-middle.sync-sources.kv-row-select > input",
        IDBlock: "#sync-sources-container > table > tbody > tr > td:nth-child(2)",
        OpenProductInAPL: "#sync-sources-container > table > tbody > tr > td.skip-export.kv-align-center.kv-align-middle.sync-sources.kv-expand-icon-cell > div > a",
        OpenProductInSite: "#sync-sources-container > table > tbody > tr > td:nth-child(4) > a:nth-child(1)",
        Vendor: "#sync-sources-container > table > tbody > tr > td:nth-child(5)",
        Price: "#sync-sources-container > table > tbody > tr > td:nth-child(6)",
        OwnerCategory: "#sync-sources-container > table > tbody > tr > td:nth-child(7) > a",
        RZCategory: "#sync-sources-container > table > tbody > tr > td:nth-child(8) > a",
        Available: "#sync-sources-container > table > tbody > tr > td:nth-child(9)",
        BPMNumber: "#sync-sources-container > table > tbody > tr > td:nth-child(10)"       
    }
};
