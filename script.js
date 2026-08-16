document.querySelector('.primary').addEventListener('click',function(){
  this.textContent = this.textContent === 'Follow' ? 'Following' : 'Follow';
});
document.querySelector('.secondary').addEventListener('click',function(){
  alert('Thanks for reaching out to Dress Decode!');
});
