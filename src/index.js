import '../index.css';
import {getUsers, deleteUser} from './api/userApi';


getUsers().then(result => {
      let usersBody = "";

      result.forEach(user => {
            usersBody += `<tr>
               <td><a href="#" data-id="${user.id}" class = "deleteUser">Delete</a></td>
               <td>${user.id}</td>
               <td>${user.firstName}</td>
               <td>${user.lastName}</td>
               <td>${user.email}</td>
            </tr>`
      });

      global.document.getElementById('users').innerHTML = usersBody;

      const deleteLinks = global.document.getElementsByClassName('deleteUser');

      // create a real array from the array-like DOM object
      Array.from(deleteLinks, link => {
            link.onclick = function(event) {
               const element = event.target;
               event.preventDefault(); // do not follow/change URL
               deleteUser(element.attributes["data-id"].value);
               const row = element.parentNode.parentNode;
               row.parentNode.removeChild(row);
            };
      });

});

