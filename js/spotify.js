$( document ).ready(function() {
var accessToken = "BQCXwh-wyjV66tJMw0A2evukXQx8t5N1KfMk-CsB1OLcn6FkCXb3QLusEky5EMww4a0x5zEJm6csYCw00nrgufE5dBKG6bTu1d7UjXr_9qWcLE5Y5uLJAA9fWwjyxhTQHj74kmZ2E2cX4Jyop0mrNVKid9khEL1BP_jjhkWt2uf1vSygfq5DxnBQulxPZO7iZWJKpKu_qSmfGOr3sRINYO-_lY6gmuMq9dfOASEoYdQq2-jk8xLl3GD0b7BtWGPXB9Sspo3nju1YnY8zdW5F59kBekFIgQyPnLuoQ9_3_enK8KiRBTbIrYtsmOP1lG3pG28TPQ";


$.ajax({
    url: 'https://api.spotify.com/v1/me',
    type: 'GET',
    headers : {
        'Authorization' : 'Bearer ' + accessToken
    },
    success: function(data) {
          $("#tbody").append("<tr><td id=\"birthdate\">"+data.birthdate+"</td><td id=\"country\">"+data.country+"</td><td id=\"email\">"+data.email+"</td><td id=\"href\">"+data.href+"</td><td id=\"id_user\">"+data.id+"</td><td id=\"product\">"+data.product+"</td><td id=\"uri\">"+data.uri+"</td></tr>");}
    ,error: function() {
        alert('La requête n\'a pas abouti');
    }
});
})
