import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactListItem } from './ContactListItem';
import {
  selectVisibleContacts,
  selectContactsIsLoading,
  selectContactslsError,
} from 'redux/contacts.selectors';
import { fetchContacts } from 'redux/contacts.reducer';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactslsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  console.log(contacts);

  return (
    <div>
      {contacts.map(item => {
        return <ContactListItem {...item} key={item.id} />;
      })}
    </div>
  );
};
