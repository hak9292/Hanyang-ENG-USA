document.getElementById('customer').addEventListener('change', function () {
  const map = {
    '49899': '20 Branton Rd SE, Cartersville GA 30121',
    'E8070': '100 Qcells Pkwy, Building 110, White GA 30184',
    '49900': '1189 Joe Frank Harris Pkwy, Cartersville GA 30120',
    '49895': '100 Qcells Pkwy, Building 300, White GA 30184'
  };
  document.getElementById('shipTo').value = map[this.value];
});

function addItemRow() {
  const container = document.createElement('div');
  container.className = 'item-entry';
  container.innerHTML = `
    <label>Item #</label>
    <input type="text" name="itemNumber" required />
    <label>Description</label>
    <input type="text" name="description" readonly value="Autofilled Description" />
    <label>SHP</label>
    <input type="number" name="shp" placeholder="0" />
    <label>RTN</label>
    <input type="number" name="rtn" placeholder="0" />
    <button type="button" class="remove-item">❌</button>
  `;
  container.querySelector('.remove-item').addEventListener('click', () => {
    if (document.querySelectorAll('.item-entry').length > 1) container.remove();
    else alert('At least one item is required');
  });
  document.getElementById('itemSection').appendChild(container);
}
document.getElementById('addItemBtn').addEventListener('click', addItemRow);
document.getElementById('deliveredDate').valueAsDate = new Date();
addItemRow();
