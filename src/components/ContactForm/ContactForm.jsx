import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../redux/actions";
import { getContacts } from "../redux/selectors";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [stateName, setStateName] = useState("");
  const [stateNumber, setStateNumber] = useState("");

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setStateName(value);
        break;

      case "number":
        setStateNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts && contacts.find((contact) => contact.name === stateName)) {
      return alert(stateName + " is already in contacts");
    } else if (!stateName) {
      return alert("Type some name");
    } else if (!stateNumber) {
      return alert("Type some number");
    }

    dispatch(addContact({ name: stateName, number: stateNumber }));
    reset();
  };

  const reset = () => {
    setStateName("");
    setStateNumber("");
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          name="name"
          type="text"
          value={stateName}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        />
      </label>

      <label>
        Number
        <input
          name="number"
          type="text"
          value={stateNumber}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}
