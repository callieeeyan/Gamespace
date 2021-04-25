const gate = "http://127.0.0.1:8001";

async function getUser(id) {
    const url = gate + `/user/${id}`;
    let res = await fetch(url)
    res =res.json()
    return res
}

async function postUser(payload) {
    const url = gate + "/user";
    let res = await fetch(url ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    res =res.json()
    return res
}

document.getElementById('edit_profile').onclick = async () => {
    event.preventDefault();
    user_name = document.getElementById('edit_user_name').value;
    user_email = document.getElementById('edit_user_email').value;
    user_phone = document.getElementById('edit_user_phone').value;
    data = {
        user_name: user_name,
        user_email: user_email,
        user_phone: user_phone,
    }
    res = await postUser(data);
    document.getElementById('username').innerHTML=res.user_name;
    document.getElementById('email').innerHTML=res.user_email;
    document.getElementById('phone').innerHTML=res.user_phone;
}

const load = async () => {
    console.log('load');
    res = await getUser('test');
    document.getElementById('username').innerHTML=res.user_name;
    document.getElementById('email').innerHTML=res.user_email;
    document.getElementById('phone').innerHTML=res.user_phone;

}

load();