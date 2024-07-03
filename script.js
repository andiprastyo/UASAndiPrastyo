// JavaScript untuk menangani pengiriman form booking
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan pengiriman form default

    // Ambil nilai dari setiap input
    const nama = document.getElementById('nama').value;
    const telepon = document.getElementById('telepon').value;
    const email = document.getElementById('email').value;
    const hotel = document.getElementById('hotel').value;
    const tanggalFrom = document.getElementById('tanggal-from').value;
    const tanggalTo = document.getElementById('tanggal-to').value;

    // Simpan data booking atau proses data lebih lanjut di sini
    console.log('Nama:', nama);
    console.log('Telepon:', telepon);
    console.log('Email:', email);
    console.log('Pilihan Hotel:', hotel);
    console.log('Tanggal Booking Dari:', tanggalFrom);
    console.log('Tanggal Booking Sampai:', tanggalTo);

    // Anda bisa tambahkan logika atau kirim data ke server di sini
    // Misalnya, menggunakan AJAX untuk mengirim data ke backend

    // Reset form setelah pengiriman berhasil
    this.reset();
});
