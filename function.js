
function loaduser() {		
	var apigClient = apigClientFactory.newClient({apiKey: "hpUV56GBup3D38aMb236J89YtbiZvRqD5FsIkibC"});
	var params = {};
	var body = {};
	var additionalParams = {headers: {'Content-Type':"application/json"}};

	apigClient.userinfoGet(params, body, additionalParams)
	    .then(function (result) {
	      console.log('@apigClient_userinfoGet success');
	      console.log(result);
	      showtext(result.data.body);
	    }).catch(function (result) {
	      console.log("failed......");
	      console.log(result);
	    });

}

function showtext(res){
	// var newDiv = document.getElementById("text");
	console.log("@showtext, result is",res);
	var result = JSON.parse(res)
    email = result.email;
    name = result.username;
    number = result.phone;
    game1 = result.game1
    game2 = result.game2;
    game3 = result.game3
    console.log("@gamep",game1);
	// console.log("email",res.split(","))
	// var res1 = res.split(",")
	// var email = res1[0].slice(2,-1)
	// var name = res1[1].slice(2,-1)
	// var number = res1[2].slice(2,-2)
	document.getElementById("E-mail").innerHTML=email;
	document.getElementById("Phone_num").innerHTML=number;
	document.getElementById("User_Name").innerHTML=name;
	document.getElementById("Game_Preference1").innerHTML=game1;
	document.getElementById("Game_Preference2").innerHTML=game2;
	document.getElementById("Game_Preference3").innerHTML=game3;
	// console.log("as",res[]);
	
	subject = result.subject;
    detail = result.detail;
    time = result.time;
	console.log("subject",subject[0])

	// var d1 = document.getElementById('post_user_name');
	// var d2 = document.getElementById('post_date');
	// var d3 = document.getElementById('post_content');
	// document.getElementById('post_user_name').innerHTML = "xiaoyan";
	// document.getElementById('post_date').innerHTML  = "123123";
	// document.getElementById('post_content').innerHTML  = "sshshhshhshshahakkakshd";

	var insertlocation = document.getElementById('postsection');
	// var total_post_number = subject.length;
	// console.log(total_post_number)


	for (i=0; i<subject.length; i++){

		subject_temp = subject[i];
		detail_temp = detail[i];
		time_temp = time[i];
		console.log("subject_temp",subject_temp)

		str = '<li >\
					<div class="community-post">\
						<div class="post-content">\
							<h5 ">'+ subject_temp + '<span> </span></h5>\
							<div class="post-date"> '+ time_temp + '</div>\
							<p>'+ detail_temp + ' </p>\
						</div>\
					</div>\
				</li>';
		insertlocation.insertAdjacentHTML('beforeend', str);
	}
}

function edituserinfo() {		
	var phone = document.getElementById("phone").value;	
	var username = document.getElementById("username").value;	
	var email = document.getElementById("email").value;	
	var game1 = document.getElementById("game1").value;	
	var game2 = document.getElementById("game2").value;	
	var game3 = document.getElementById("game3").value;	

	console.log("phone",phone);

	var apigClient = apigClientFactory.newClient({apiKey: "hpUV56GBup3D38aMb236J89YtbiZvRqD5FsIkibC"});
	var params = {
		"phone": phone,
		"username":username,
		"email":email,
		"game1":game1,
		"game2":game2,
		"game3":game3
	};
	var body = {
		"phone": phone,
		"username":username,
		"email":email,
		"game1":game1,
		"game2":game2,
		"game3":game3
	};

	var additionalParams = {headers: {'Content-Type':"application/json"}, queryParams: {
		"phone": phone,"username":username,"email":email,"game1":game1,"game2":game2,"game3":game3}};

	console.log("i'm in edit")
	apigClient.userinfoPost(params, body, additionalParams)
	    .then(function (result) {
	      console.log('@apigClient_rootpost success');
	      console.log(result);
	      // showtext(result.data.body);
	    }).catch(function (result) {
	      console.log("failed..edituserinfo");
	      console.log(result);
	    });
	    
	document.getElementById("phone").value = '';	
	document.getElementById("username").value = '';	
	document.getElementById("email").value = '';	
	document.getElementById("game1").value = '';	
	document.getElementById("game2").value = '';	
	document.getElementById("game3").value = '';	  
}

function uploadPost() {		
	var subject = document.getElementById("subject").value;	
	var post_detail = document.getElementById("post_detail").value;	
	console.log("subject",subject);

	var apigClient = apigClientFactory.newClient({apiKey: "hpUV56GBup3D38aMb236J89YtbiZvRqD5FsIkibC"});
	var params = {
		"subject": subject,
		"post_detail":post_detail
	};
	var body = {
		"subject": subject,
		"post_detail":post_detail
	};

	var additionalParams = {headers: {'Content-Type':"application/json"}, queryParams: {
		"subject": subject, "post_detail":post_detail}};


	console.log("i'm in uploadPost")
	apigClient.postforumPost(params, body, additionalParams)
	    .then(function (result) {
	      console.log('@apigClient_postforumPost success');
	      console.log(result);
	    }).catch(function (result) {
	      console.log("failed..postforumPost");
	      console.log(result);
	    });
	document.getElementById("subject").value = '';	
	document.getElementById("post_detail").value = '';	
}


function sendemail() {		
			// var apigClient = apigClientFactory.newClient({apiKey: "hpUV56GBup3D38aMb236J89YtbiZvRqD5FsIkibC"});
			// var params = {};
			// var body = {};
			// var additionalParams = {headers: {'Content-Type':"application/json"}};

			// apigClient.forumpageGet(params, body, additionalParams)
			//     .then(function (result) {
			//       console.log('@apigClient_forumpageGet success');
			//       console.log(result);
			//       showtext2(result.data.body);
			//     }).catch(function (result) {
			//       console.log("failed......");
			//       console.log(result);
			//     });
	document.getElementById("f1").value = 'asdasd';	
	document.getElementById('f1').innerHTML="here";
}
