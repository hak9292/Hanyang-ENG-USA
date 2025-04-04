const customerMap = {
  '49899': '20 Branton Rd SE, Cartersville GA 30121',
  'E8070': '100 Qcells Pkwy, Building 110, White GA 30184',
  '49900': '1189 Joe Frank Harris Pkwy, Cartersville GA 30120',
  '49895': '100 Qcells Pkwy, Building 300, White GA 30184'
};

const itemDescriptions = {
  '33P': 'UN1075, Propane, 2.1',
  'PGSAR230': 'UN1951, ARGON, REFRIGERATED LIQUID, 2.2',
  'PGSN230': 'UN1977, NITROGEN, REFRIGERATED LIQUID 2.2',
  'LAR': 'UN1006, ARGON, COMPRESSED, 2.2',
  'PGSN': 'UN1977, NITROGEN, REFRIGERATED LIQUID 2.2',
  'PGSAR': 'UN1951, ARGON, REFRIGERATED LIQUID, 2.2',
  'LH': 'UN1046, HELIUM, COMPRESSED 2.2',
  '12PAKLN': 'UN1066, NITROGEN, COMPRESSED, 2.2'
};

document.getElementById('customer').addEventListener('change', (e) => {
  document.getElementById('shipTo').value = customerMap[e.target.value] || '';
});

function addItemRow() {
  const wrapper = document.createElement('div');
  wrapper.className = 'item-entry';
  wrapper.innerHTML = `
    <button type="button" class="remove-item" title="Remove item">×</button>
    <label>Item #
      <input name="itemNumber" required />
    </label>
    <label>Description
      <input name="description" readonly value="Autofilled Description" />
    </label>
    <label>SHP
      <input name="shp" type="number" placeholder="0" />
    </label>
    <label>RTN
      <input name="rtn" type="number" placeholder="0" />
    </label>
  `;

  wrapper.querySelector('.remove-item').onclick = () => {
    const items = document.querySelectorAll('.item-entry');
    if (items.length > 1) wrapper.remove();
    else alert("At least one item is required.");
  };

  document.getElementById('itemSection').appendChild(wrapper);
}

document.getElementById('addItemBtn').onclick = addItemRow;

addItemRow(); // default on load