const sendwtsp = document.getElementById('sendWhatsappButton');

document.addEventListener('DOMContentLoaded', function () {
  const selectElement = document.getElementById('selectSize');
 


  if (selectElement) {
    // Function to update prices
    function updatePrices() {
      const selectedOption = selectElement.options[selectElement.selectedIndex];


      
      const lowPrice = selectedOption.getAttribute('min-value');
      const highPrice = selectedOption.getAttribute('max-value');
      const sizeofbtl = selectedOption.getAttribute('size');
     

      document.getElementById('lowPrice').textContent = lowPrice ? `$${lowPrice}` : 'N/A';
      document.getElementById('highPrice').textContent = highPrice ? `$${highPrice}` : 'N/A';
      document.getElementById('sizeofbtl').textContent = sizeofbtl ? `${sizeofbtl}` : 'N/A';
    }

    // Bind the updatePrices function to the change event
    selectElement.addEventListener('change', updatePrices);
    arrData=[];
    updatePrices();
  } 
  const sendwtsp = document.getElementById('sendWhatsappButton'); 

    sendwtsp.onclick = function () {
        const selectElement = document.getElementById('selectSize');
        
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        const sizeofbtl = selectedOption.value; 
        
        const perfumeNameElement = document.querySelector('[perfume-name]');
        const nameofPF = perfumeNameElement.getAttribute('perfume-name');
        
        const text = `Hello, I would like to order a ${sizeofbtl} ml bottle of ${nameofPF} perfume. Could you kindly assist me with the order? Thank you.`;

        const button = document.getElementById("sendWhatsappButton");
      
        const phoneNumber = button.getAttribute("phone_number");

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        
        window.open(whatsappUrl, '_blank');
    };
  
});

