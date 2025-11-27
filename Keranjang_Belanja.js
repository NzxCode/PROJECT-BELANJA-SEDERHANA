        let keranjangSaya = []; 

        let dataTersimpan = localStorage.getItem("dataKeranjang");
        if (dataTersimpan) {
            keranjangSaya = JSON.parse(dataTersimpan);
            updateTampilan(); 
        }

        function updateTampilan() {
            let ListHTML = document.getElementById("listKeranjang");
            ListHTML.innerHTML = "";

            for (let i = 0; i < keranjangSaya.length; i++) {
                let data = keranjangSaya[i]; 

                let teks = data.nama + " - Rp " + data.harga; 

                let HTMLBaru = "<li>" + teks + " <button onclick='hapusSatu(" + i + ")' style='color:red; margin-left:10px;'>[X]</button></li>";
                ListHTML.innerHTML += HTMLBaru;
            }

            document.getElementById("totalText").innerText = keranjangSaya.length;
        }

        function tambahBarang() {
            let inputNama = document.getElementById("inputNama");
            let inputHarga = document.getElementById("inputHarga");

            let nama = inputNama.value;
            let harga = inputHarga.value;

            if (nama == "" || harga == "") {
                alert("Mohon lengkapi nama dan harga!");
                return;
            }

            let barangBaru = {
                nama: nama,
                harga: harga
            };

            keranjangSaya.push(barangBaru);
            
            localStorage.setItem("dataKeranjang", JSON.stringify(keranjangSaya));
            updateTampilan(); 

            inputNama.value = "";
            inputHarga.value = "";
        }

        function hapusSatu(urutan) {
            keranjangSaya.splice(urutan, 1);
            localStorage.setItem("dataKeranjang", JSON.stringify(keranjangSaya));
            updateTampilan(); 
        }