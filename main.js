
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
  container.innerHTML = \`
    <label>Item #</label>
    <input type="text" name="itemNumber" required />
    <label>Description</label>
    <input type="text" name="description" readonly value="Auto-filled desc" />
    <label>SHP</label>
    <input type="number" name="shp" placeholder="0" />
    <label>RTN</label>
    <input type="number" name="rtn" placeholder="0" />
    <button type="button" class="remove-item">❌</button>
  \`;
  container.querySelector('.remove-item').addEventListener('click', () => {
    if (document.querySelectorAll('.item-entry').length > 1) container.remove();
    else alert('At least one item is required');
  });
  document.getElementById('itemSection').appendChild(container);
}
document.getElementById('addItemBtn').addEventListener('click', addItemRow);
document.getElementById('deliveredDate').valueAsDate = new Date();
addItemRow();

document.getElementById('gasForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const customer = document.getElementById('customer').value;
  const shipTo = document.getElementById('shipTo').value;
  const invoice = document.getElementById('invoiceNumber').value;
  const orderDate = document.getElementById('orderDate').value;
  const deliveredDate = document.getElementById('deliveredDate').value;

  const items = [...document.querySelectorAll('.item-entry')];
  for (const entry of items) {
    const shp = entry.querySelector('[name="shp"]').value || '0';
    const rtn = entry.querySelector('[name="rtn"]').value || '0';
    if (shp === '0' && rtn === '0') {
      alert('SHP and RTN cannot both be 0. Please correct.');
      return;
    }
    await fetch('https://script.google.com/macros/s/AKfycbzzUi3phC7V2H5Blc8v8MktYBRB1eiBzt19BoQUftgriUA0AQYXeBX124oL7lZvHJ2-cg/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customer,
        shipTo,
        invoice,
        date: orderDate,
        item: entry.querySelector('[name="itemNumber"]').value,
        description: entry.querySelector('[name="description"]').value,
        shp,
        rtn,
        delivered: deliveredDate
      })
    });
  }

  alert('Submission successful!');
  document.getElementById('gasForm').reset();
  document.getElementById('itemSection').innerHTML = '';
  addItemRow();
});
