function tampil() {
  let nim = document.getElementById("nim").value;
  let nama = document.getElementById("nama").value;
  let matkul = document.getElementById("mata-kuliah").value;
  let nilai = document.getElementById("nilai").value;
  let nilaiHuruf = "";
  let indeksNilai = "";
  let keterangan = "";

  if (nilai >= 85 && nilai <= 100) {
    nilaiHuruf = "A";
    indeksNilai = "4.00";
    keterangan = "PUJIAN";
  } else if (nilai >= 79 && nilai < 85) {
    nilaiHuruf = "A-";
    indeksNilai = "3.67";
    keterangan = "Sangat Memuaskan";
  } else if (nilai >= 74 && nilai < 79) {
    nilaiHuruf = "B+";
    indeksNilai = "3.33";
    keterangan = "Sangat Memuaskan";
  } else if (nilai >= 69 && nilai < 74) {
    nilaiHuruf = "B";
    indeksNilai = "3.00";
    keterangan = "Memuaskan";
  } else if (nilai >= 64 && nilai < 69) {
    nilaiHuruf = "B";
    indeksNilai = "2.67";
    keterangan = "Memuaskan";
  } else if (nilai >= 59 && nilai < 64) {
    nilaiHuruf = "C+";
    indeksNilai = "2.33";
    keterangan = "-";
  } else if (nilai >= 54 && nilai < 59) {
    nilaiHuruf = "C";
    indeksNilai = "2.00";
    keterangan = "-";
  } else if (nilai >= 41 && nilai < 54) {
    nilaiHuruf = "D";
    indeksNilai = "1.00";
    keterangan = "-";
  } else if (nilai >= 0 && nilai < 40) {
    nilaiHuruf = "E";
    indeksNilai = "0.00";
    keterangan = "-";
  } else {
    alert("Nilai Harus 0-100");
    return;
  }

  var output = document.getElementById("output");
  output.innerHTML = `<p>NIM : ${nim}</p>
                    <p>NAMA : ${nama}</p>
                    <p>Mata Kuliah : ${matkul}</p>
                    <p>Nilai Akhir : ${nilai}</p>
                    <p>Nilai Huruf : ${nilaiHuruf}</p>
                    <p>Indeks Nilai : ${indeksNilai}</p>
                    <p>Keterangan : ${keterangan}</p>`;
}
