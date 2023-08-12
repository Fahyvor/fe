import React, { ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../store'; // Make sure to adjust the import path based on your actual project structure
import { setName } from '../store/actions';

interface FormComponentProps extends ReduxProps {}

const FormComponent: React.FC<FormComponentProps> = ({ name, setName }) => {
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <label>Name:</label>
      <input type="text" value={name} onChange={handleNameChange} required />
      {/* ... other form fields ... */}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    name: state.form.name,
    // ... map other form fields here ...
  };
};

const mapDispatchToProps = {
  setName,
  // ... add other action creators here ...
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(FormComponent);
