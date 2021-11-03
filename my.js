function testGS() {
   const url = "https://script.google.com/macros/s/AKfycbxCULeVi_SDNJj1xy18Ij5_tSlyRupV2esStE1M_FabcqUUjXsFz_HWZVBWnen0JavLiw/exec";

   fetch(url)
      .then(d => d.json())
      .then(d => {
         document.getElementById("app").textContent = d[0].status;
      });
}


document.getElementById("btn").addEventListener("click", testGS);
