function toggleDropdown() {
  const dropdown = document.getElementById('dropdown-content')

  if (dropdown.classList.contains('hidden')) {
    dropdown.classList.remove('hidden');
  } else {
    dropdown.classList.add('hidden');
  }
}

document.getElementById('drop-btn').addEventListener('click', () => {
  toggleDropdown();
})


