// async function get_audible_tabs() {
//     var query_info = {
//         "audible": true
//     }
//     var request = await chrome.tabs.query(queryInfo = query_info);
//     var tmp = resolve(request);
//     var data = tmp.text();
//     var textarea = document.getElementById("audible_tabs");
//     textarea.value = data;
// }




function write_audible() {
    get_audible()
        .then(function (result) {
            document.getElementById("audible_tabs").value = (result[0].url)
        })
    // document.getElementById("audible_tabs").value = text;
}


function get_audible() {
    var query_info = {"audible": true};
    return new Promise(function(resolve, reject) {
        try {
            chrome.tabs.query(query_info, function (result) {
                if (chrome.runtime.lastError) reject(chrome.runtime.lastError)
                else resolve(result)
            })
        }
        catch (error) {
            reject(error)
        }
    })
}
window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("button").addEventListener("click", write_audible);
});
