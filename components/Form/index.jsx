import React from 'react';

export const Form = () => {
  return (
    <form>
      <p>
        <label>First required field</label>
        <select>
          <option value="11">Option 1.1</option>
          <option value="21">Option 2.1</option>
          <option value="31">Option 3.1</option>
          <option value="41">Option 4.1</option>
        </select>
      </p>
      <p>
        <label>Second required field</label>
        <select>
          <option value="12">Option 1.2</option>
          <option value="22">Option 2.2</option>
          <option value="32">Option 3.2</option>
          <option value="42">Option 4.2</option>
        </select>
      </p>
      <p>
        <label>Optional field</label>
        <input type="text" />
      </p>
      <p>
        <button>Submit</button>
      </p>
    </form>
  );
};
