export default function getBaseURL() {
    return getQueryStringParameterByName('useMockApi') === 'true' ? 'localhost:1924/' : 'https://peaceful-shore-45860.herokuapp.com/';
}

function getQueryStringParameterByName (name, url) {
   if (!url) url = window.location.href;
   name = name.replace(/[\[\]]/g, "\\$&");
   var regex = new RegExp("[?$]" + name + "(=([^&#]*)|&|#|$)"),
       results = regex.exec(url);
   if (!results) return null;
   if (!results[2]) return '';
   return decodeURIComponent(results[2].replace(/\+/g, " "));
}
