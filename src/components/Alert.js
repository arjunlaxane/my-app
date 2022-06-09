import React from 'react';

export default function Alert(props) {
  //initially props.alert.type is null. So, jsx cant read property of null value  to overcome it either we can use if else condition or we can use props.alert && syntax.........if use && then it will evaluate props.alert first and if it is true only then it will return second value. but if first one is false then bombaa

  //this happens bcoz all jsx will be converted to js calls

  //---------------------------------------------------
  //-to capitalise first letter of alert type(success)

  const capitalize = word => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: '50px' }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
          {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
          {/* we removed this cross button to set timer for alert */}
        </div>
      )}
    </div>
  );
}
