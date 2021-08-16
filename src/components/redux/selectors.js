const getContacts = state => state.contacts;
const getFilter = state => state.filter;

const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  if (contacts && filter) {
    const normalizedFilter = filter.toLowerCase();
    const filteredContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return filteredContact;
  }
  return contacts;
};

export { getContacts, getFilter, getFilteredContacts };