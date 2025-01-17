function sessionTask(sesi, content) {
    let html = ``;
    for (let i = 0; i < sesi; i++) {
        html += `
            ${content} ${sesi > 1 ? `<br>` : ``}
        `;
    }
    return html;
}
function shortInput(placeholder) {
    return `<input class="form-control form-control-short" placeholder="${placeholder}" required />`
}
function longInput(placeholder) {
    return `<input class="form-control form-control-long" placeholder="${placeholder}" required />`
}
const payload = {
    "senin": [{
        "name": "Send weekly schedule and FAQ on Group Class",
        placeholder: function (sesi) {
            return `<div style="border-left: 3px solid #6262626b; padding-left: 20px" class="text-msg mb-3"> Selamat ${shortInput('pagi, siang')}, teman-teman semua! ${shortInput('@batch')} Gimana nih kabarnya? Semoga dalam keadaan baik dan sehat ya.
                <br>
Aku mau menginformasikan untuk skema pelatihan bootcamp - Full Stack Web Development minggu ini.
Di minggu ini teman-teman diwajibkan untuk menonton Video Learning yang ada di LMS di antaranya :
<br>
<br>
<textarea class="form-control" rows="4" style="height: 100%; display: unset; width: 100%" placeholder="Contoh: 
1. Database
2. Node JS
"></textarea>
<br>
<br>
teman-teman bisa klik tab modules untuk melihat list topik di minggu ini,
dan juga akan ada Homework yang teman-teman harus kerjakan dan selesaikan dan submit di LMS sebelum Live Session berlangsung. Keterlambatan pengumpulan dapat mengakibatkan berkurangnya nilai Homework.
<br>
<br>
Live session akan berlangsung setiap hari ${shortInput('Minggu')}, pukul ${shortInput('10.00 - 12.00')} WIB dan jika ada kelas tambahan/perubahan akan diinformasikan, dan Live Session ini juga wajib teman-teman ikuti karena akan membahas Homework/Hands-on  yang sudah teman-teman kerjakan dan minimal kehadiran 85% sebagai salah satu syarat kelulusan.
<br>
<br>
Jika ada pertanyaan, teman-teman bisa submit pertanyaan ke link FAQ berikut ya di mana pertanyaan ini akan dijawab oleh Tutor saat Live Session.
<br>
<br>
${sessionTask(sesi, `Link FAQ Week ${shortInput('week')} Sesi ${shortInput('sesi')}: <input class="form-control" placeholder="Link FAQ" />`)}


<br>
<br>
Oh iya jangan lupa juga untuk Homework/reading/exam di minggu ini ya
<br>
<textarea class="form-control" rows="4" style="height: 100%; display: unset; width: 100%" placeholder="Contoh: 
Homework - Database - 20 Januari 2023 23:59
Exam - Database - 20 Januari 2023 23:59
"></textarea> </div>`;
        }
    }],
    "rabu": [
        {
            "name": "Send Live Discussion with Astor Schedule on Group Class",
            placeholder: function () {
                return `<div style="border-left: 3px solid #6262626b; padding-left: 20px" class="text-msg mb-3">Selamat ${shortInput('pagi, siang')} teman-teman semua! ${shortInput('@batch')}
<br>
Aku mau menginformasikan jadwal Live Mentoring bersama Asisten Tutor kita nih!
Tapi sebelumnya ada yang udah tahu belum apa itu Live Discussion bersama Asisten Tutor?
<br>
Jadi… Live Mentoring bersama Asisten Tutor ini adalah wadah untuk teman-teman bertanya mengenai cara dan pemahaman Homework yang perlu dikerjakan setiap minggunya. Teman-teman bisa berdiskusi dengan teman-teman grup dan juga Asisten Tutor pada hari yang sudah dijadwalkan. Dalam satu kelas, akan dibagi menjadi beberapa kelompok di mana satu kelompok maksimal berisikan 34 siswa.
<br>
Live Mentoring with Asisten Tutor ini akan dilaksanakan 1x seminggu nih teman-teman.
<br>
Untuk jadwal di minggu ini sebagai berikut ya :
<br>
Week ${shortInput('Week')} : <input class="form-control" placeholder="Jumat, 13 Januari 2023" />
<br>
So, jangan sampai tidak hadir ya! Aku sangat sarankan untuk semua hadir agar teman-teman bisa memahami dan mengerjakan Homework dengan baik!
<br>
<br>
Terima kasih. Happy Learning! </div>
`
            }
        },
        {
            "name": "Send message to Tutor for Live Session schedule",
            placeholder: function (sesi) {
                return `
                ${sessionTask(sesi,`<div style="border-left: 3px solid #6262626b; padding-left: 20px" class="text-msg mb-3">
Selamat pagi kak ${shortInput('Nama tutor')} Perkenalkan saya ${shortInput('Nama CC')} CC ${shortInput('Major - Batch')}. Salam kenal. Aku ingin menginformasikan untuk jadwal kelas kak di minggu ini ya
<br>
<br>
Sesi ${shortInput('1')} <br>
Hari/tanggal : ${longInput('Minggu, 13 Januari 2023')}
<br>
Waktu : ${shortInput('10.00 - 12.00')}
<br>
Topik : ${longInput('Live Session -  Database')}
<br>
Link Zoom : ${longInput('https://us06web.zoom.us/j/84001146923')}
<br>
<br>
Link FAQ : ${longInput('https://docs.google.com/spreadsheets/d/1FBlyTwco8r9v1LvZYaN0Xt3mP1chQptL9jork-ashVk/edit?usp=sharing')}
<br>
<br>
Mohon konfirmasinya terkait jadwal di atas. Terimakasih.
</div>`)}`
            }
        }
    ],
    "sabtu": [{
        "name": "Reminder student on Class Group for Live Session",
        placeholder: function (sesi) {
            return `<div style="border-left: 3px solid #6262626b; padding-left: 20px" class="text-msg mb-3">Halo halo kalian semua, selamat ${shortInput('pagi. siang')} nih ${shortInput('@batch')}
<br><br>
Jangan lupa ya kita besok ada live session nih. Yang akan dilaksanakan pada:
<br><br><br>
${sessionTask(sesi, `
Sesi ${shortInput('1')}<br>
Hari/tanggal : ${longInput('Minggu, 19 Februari 2023')}<br>
Waktu : ${shortInput('10.00 - 12.00')}<br>
Topik : ${longInput('Live Session - Node JS & Restful API')}<br>
Tutor : ${longInput('Reza Nur Rochmat')}
<br><br>
Link Zoom : ${longInput('https://us06web.zoom.us/j/84001146923')}
<br><br>
Link FAQ: <br>
${longInput('https://docs.google.com/spreadsheets/d/1FBlyTwco8r9v1LvZYaN0Xt3mP1chQptL9jork-ashVk/edit?usp=sharing')}
<br><br>
`)}
Dimohon kehadiran teman teman dan usahakan tepat waktu ya teman teman. Terimakasih.
</div>`;}

    }],
    "minggu": [
        {
            "name": "Send form feedback Tutor on Class Group",
            placeholder: function (sesi){
                return `<div style="border-left: 3px solid #6262626b; padding-left: 20px" class="text-msg mb-3">Selamat ${shortInput('Pagi, Siang')} teman-teman Bootcamp - Full Stack Web Development ${shortInput('@B1, @B2')} , bagaimana nih pengalaman kalian di Live Session minggu ini? Semoga menyenangkan ya.
                <br>
                <br>
Untuk meningkatkan kualitas pembelajaran Rakamin Academy, kami membutuhkan feedback penilaian Tutor dari teman-teman semua.
<br>
<br>
Teman-teman bisa mengisi di form berikut ya! Terima kasih.
<br>
<br>
Form link feedback :  <br>
${sessionTask(sesi, `Sesi ${shortInput('1, 2, 3')} :
 ${longInput('Link Feedback')}`)}
`
            }
        },
        {
            "name": "Send Engagement Day Schedule on Group Class",
            placeholder: function (sesi){
                return `<div style="border-left: 3px solid #6262626b; padding-left: 20px" class="text-msg mb-3">Selamat ${shortInput('Pagi, siang')} teman-teman semua! ${shortInput('@B1, @B2')} Gimana nih kabarnya? Semoga dalam keadaan baik dan sehat ya dan dilancarkan progress pembelajarannya.
<br>
<br>
Aku mau menginformasikan jadwal Engagement Day kita nih!
Tapi sebelumnya ada yang udah tahu belum apa itu Engagement Day?
<br>
<br>
Jadi… Engagement Day ini berfungsi untuk menjadi media mengakrabkan diri antar siswa. Nggak hanya main games ataupun kuis, kita juga bisa belajar bersama lho! Jadi pasti bakal seru banget!
<br>
<br>
Engagement Day ini akan dilaksanakan 2x sebulan nih teman-teman dengan durasi 1 jam per sesinya.
<br>
<br>
Untuk jadwal Engagement Day kita sebagai berikut ya :
<br>
<br>
<br>
Sesi ${shortInput('Sesi')} bulan ke ${shortInput('1, 2')} : ${longInput('Rabu, 22 Februari 2023 Pukul 19.00 - 20.00 WIB')}
<br>
<br>
Link zoom : <br>
${longInput('https://us06web.zoom.us/j/81693211398')}
<br>
<br>
So, jangan sampai tidak hadir ya! Aku sangat sarankan untuk semua hadir agar teman-teman tidak merasa sendiri selama proses pembelajaran dan menambah relasi untuk ke depannya!
<br>
<br>
Terima kasih teman-teman. See you on Engagement Day!</div>`
            }
        }
    ]
};

function generateForm(day) {
    let data = payload[day];
    let temp = [];
    let sesi = prompt("Berapa sesi ?");
    if (sesi.length > 0) {
        for (var i = 0; i < data.length; i++) {
            temp.push([data[i].name, data[i].placeholder(parseInt(sesi))])
        }
        return (temp);
    } else {
        return false;
    }
}

function generateCard(day, ul) {
    let daysArray = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    let today = new Date().getDay();
    let dayName = daysArray[today].toLocaleLowerCase();
    return `
            <div class="col-md-4 mb-3">
                <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm" ${dayName == day ? "style='border: 1px solid green'" : ''}>
                    <div class="app-card-header p-3 border-bottom-0" >
                        <div class="row align-items-center gx-3">
                            <div class="col-auto">
                                <div class="app-icon-holder">
                                </div><!--//icon-holder-->
                                
                            </div><!--//col-->
                            <div class="col-auto">
                                <h4 class="app-card-title">${day.charAt(0).toUpperCase() + day.slice(1)}</h4>
                            </div><!--//col-->
                        </div><!--//row-->
                    </div><!--//app-card-header-->
                    <div class="app-card-body px-4">
                        
                        <div class="intro">
                            ${ul}
                        </div>
                    </div><!--//app-card-body-->
                    <div class="app-card-footer p-4 mt-auto">
                    <a class="btn app-btn-secondary btn-generate" href="#" onclick="generateMessage('${day}')">Generate Message</a>
                    </div><!--//app-card-footer-->
                </div><!--//app-card-->
            </div>
        </div>
    
    `;
}

function generateTask(day) {
    const tasks = payload[day];
    let li = ``;
    for (let i = 0; i < tasks.length; i++) {
        li += `<li class="task">${tasks[i].name}</li>`;
    }
    let ul = `<ul>${li}</ul>`;
    let card = generateCard(day, ul);
    let container = document.querySelector("#day-container");
    container.innerHTML += card;
}

function generateMessage(day) {
    let title = document.getElementById("modalTitleId").innerHTML = `Task Hari ${day.charAt(0).toUpperCase() + day.slice(1)}`;
    let getForm = generateForm(day);

    if (getForm != false) {
        let container = ``;
        document.querySelector('.modal-body').innerHTML = ``;
        for (var i = 0; i < getForm.length; i++) {
            document.querySelector('.modal-body').innerHTML += `<div class="title-task" style="
            margin: 0;
            padding: 0;
            "><div class="app-card alert alert-dismissible shadow-sm mb-4 border-left-decoration "><b>${getForm[i][0]}</b> </div></div>`;
            document.querySelector('.modal-body').innerHTML += getForm[i][1];
        }
        modal.show()
    } else {
        return false;
    }
}

generateTask("senin");
generateTask("rabu");
generateTask("sabtu");
generateTask("minggu");

