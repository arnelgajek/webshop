import React from "react";

class BreadCrumbProduct extends React.Component {
  render() {
    return (
      <div className="ui large breadcrumb">
        <a href="/" className="section">
          Home
        </a>
        <i className="right angle icon divider" />
        <a href="/products" className="section">
          Products
        </a>
        <i className="right angle icon divider" />
        <div className="active section">iMac</div>
      </div>
    );
  }
}

export default BreadCrumbProduct;

// import React from "react";
// import { NavLink } from "react-router-dom";

// const BreadCrumb = props => {
//   let content = [];
//   for (let i = 0; i < props.nav.length; i++) {
//     if (i + 1 === props.nav.length) {
//       content.push(
//         <BreadCrumb.Section
//           as={NavLink}
//           onClick={() => props.rollBackBreadCrumbs(i)}
//           to={props.nav[i][0]}
//         >
//           {" "}
//           {props.nav[i][1]}
//         </BreadCrumb.Section>
//       );
//     } else {
//       content.push(
//         <React.Fragment>
//           <BreadCrumb.Section
//             as={NavLink}
//             onClick={() => props.rollBackBreadCrumbs(i)}
//             to={props.nav[i][0]}
//           >
//             {props.nav[i][1]}
//           </BreadCrumb.Section>
//           <BreadCrumb.Divider />
//         </React.Fragment>
//       );
//     }
//   }

//   return <BreadCrumb size="massive">{content}</BreadCrumb>;
// };

// export default BreadCrumb;
