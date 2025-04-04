
document.getElementById('addItemBtn').addEventListener('click', addItemRow);
document.getElementById('deliveredDate').valueAsDate = new Date();
const itemSection = document.getElementById('itemSection');

function addItemRow() {
  const wrapper = document.createElement('div');
  wrapper.className = 'item-entry';
  wrapper.innerHTML = \`
    <button type="button" class="remove-item" title="Remove this item">×</button>
    <label>Item #</label>
    <input type="text" name="itemNumber" required />
    <label>Description</label>
    <input type="text" name="description" value="Autofilled Description" readonly />
    <label>SHP</label>
    <input type="number" name="shp" placeholder="0" />
    <label>RTN</label>
    <input type="number" name="rtn" placeholder="0" />
  \`;

  wrapper.querySelector('.remove-item').addEventListener('click', () => {
    const entries = document.querySelectorAll('.item-entry');
    if (entries.length > 1) {
      wrapper.remove();
    } else {
      alert("At least one item must be present.");
    }
  });

  itemSection.appendChild(wrapper);
}

addItemRow(); // Initialize with one
