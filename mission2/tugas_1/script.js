const items = [
    {namaBarang: "Weekly Dia Pass", harga: 20581, img: "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/MLBB-Diamond-Pass_Popular-tag%20(2).png"},
    {namaBarang: "Twilight Pass", harga: 99900, img: "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/100x100/TwilightPass_MLBB.png"},
    {namaBarang: "40 Diamonds", harga: 10000, img: "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/100x100/50orless_MLBB_Diamonds.png"},
    {namaBarang: "975 Diamonds", harga: 169000, img: "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/100x100/500orMore_MLBB_Diamonds.png"},
    {namaBarang: "2010 Diamonds", harga: 290000, img: "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/100x100/1500orMore_MLBB_Diamonds.png"},
    {namaBarang: "4830 Diamonds", harga: 369000, img: "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/100x100/5000orMore_MLBB_Diamonds.png"},
];

// Mendapatkan elemen dengan id list-item
const listItem = document.getElementById('list-item');

// Menambahkan elemen-elemen baru ke dalam listItem
for( i = 0; i < items.length; i++ ) {
    const newItem = `
        <div class="card ml-6" style="width: 16rem;">
            <img src="${items[i].img}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${items[i].namaBarang}</h5>
                <p class="card-text">IDR ${items[i].harga.toLocaleString("id-ID")}</p>
                <div class="row">
                    <div class="col-4 d-flex justify-content-center align-items-center mb-3">
                        <a class="btn btn-primary btn-sq-min d-flex justify-content-center align-items-center" onclick="min('kuantitas-${i+1}')">-</a>
                    </div>
                    <div class="col-4 d-flex justify-content-center align-items-center">
                        <div class="input-group input-group-sm mb-3">
                            <input type="text" class="form-control teks-center" id="kuantitas-${i+1}" value="0" disabled>
                        </div>
                    </div>
                    <div class="col-4 d-flex justify-content-center align-items-center mb-3">
                        <a class="btn btn-primary btn-sq-plus d-flex justify-content-center align-items-center" onclick="plus('kuantitas-${i+1}')">+</a>
                    </div>
                </div>
                <a class="btn btn-primary btn-custom d-flex justify-content-center align-items-center" onclick="addToCart('${i+1}')">Tambah Barang</a>
            </div>
        </div>
    `;
    // Tambahkan elemen baru ke dalam listItem
    listItem.innerHTML += newItem;
}

function plus(kuantitasId) {
    const kuantitas = document.getElementById(kuantitasId);
    let qty = parseInt(kuantitas.value);

    qty++;
    kuantitas.value = qty;
}

function min(kuantitasId) {
    const kuantitas = document.getElementById(kuantitasId);
    let qty = parseInt(kuantitas.value);

    if( qty > 0 ) {
        qty--;
    }
    kuantitas.value = qty;
}

const mycart = document.getElementById('mycart');
const myinvoice = document.getElementById('invoice');
let totalHarga = 0;

function addToCart(id) {
    const kuantitas = document.getElementById('kuantitas-' + id);
    const btnAddToCart = document.getElementById(id);
    const item = document.createElement('div');
    item.classList.add('row');
    const detailItem = `
        <div class="col-3">
            <img src="${items[id-1].img}" width="60" height="60" class="border">
        </div>
        <div class="col-6">
            <h5>${items[id-1].namaBarang}</h5>
            <p>IDR ${items[id-1].harga.toLocaleString("id-ID")} x ${kuantitas.value}</p>
        </div>
        <div class="col-3 d-flex justify-content-center align-items-center">
            <p class="bold">IDR ${(items[id-1].harga * kuantitas.value).toLocaleString("id-ID")}</p>
        </div>
        <hr>
    `;
    if( kuantitas.value != 0 ) {
        item.innerHTML = detailItem;
        mycart.appendChild(item);
        totalHarga += items[id-1].harga * kuantitas.value;
        invoice();
        kuantitas.value = 0;
    }
    else {
        alert('Masukkan jumlah barangnya dulu!');
    }
}

function invoice() {
    const detailInvoice = `
    <p class="bold ml-45">IDR ${totalHarga.toLocaleString("id-ID")}</p>
    <p class="bold ml-45">IDR ${(totalHarga * 11 / 100).toLocaleString("id-ID")}</p>
    <p class="bold ml-45">IDR ${(totalHarga + (totalHarga * 11 / 100)).toLocaleString("id-ID")}</p>
    `;
    myinvoice.innerHTML = detailInvoice;
}