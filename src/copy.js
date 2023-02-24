function iconCopy(){
    return `<div class="badge text-info" style="
    position: absolute;
    right: 27px; cursor: pointer;
    " onclick="copy(this)">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16">
    <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
    </svg>
  </div>`
}
function getText(e) {
    e.innerHTML = `...`;
    setTimeout(() => {
        let copy_content = document.querySelectorAll('.text-msg');
        let title_task = document.querySelectorAll('.title-task');

        let copy_container = document.querySelector('#modal-body-container');
        // Buat variabel kosong untuk menampung teks yang akan Anda baca
        var teks = '';

        // Loop melalui semua elemen di dalam copy_content dan tambahkan teksnya ke variabel teks
        for(let i = 0; i < copy_content.length; i++) {
            teks += i < title_task.length ? title_task[i].innerHTML : '';
            teks += `<div style="border-left: 3px solid #6262626b; padding-left: 20px; padding-bottom: 50px" class="mb-3 shadow-sm">
            `;
            for (let j = 0; j < copy_content[i].childNodes.length; j++) {
                var node = copy_content[i].childNodes[j];
                if (node.nodeType === 3) { // 3 adalah tipe node teks
                    teks += node.textContent;
                } else if (node.nodeType === 1) { // 1 adalah tipe node elemen
                    if (node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA') {
                        let new_text = node.value.replace('\n', "<br>")
                        teks += new_text;
                    } else if (node.nodeName === 'BR') {
                        teks += '<br>';
                    } else {
                        teks += node.innerText;
                    }
                }
            }
            teks += `
            ${iconCopy()}
            </div>`;
        }
        copy_container.innerHTML = teks;
        modal.hide()
        modal_copy.show();
        e.innerHTML = `Generate`;
    }, 1000)

}

function copy(text){
    text = text.parentElement;
    // Copy the text inside the text field
    if (window.isSecureContext && navigator.clipboard) {
        navigator.clipboard.writeText(text.innerText);
        // Alert the copied text
    }
    alert('Text copied to clipboard');
}