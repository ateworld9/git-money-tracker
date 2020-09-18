// import React, { useState } from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import { makeStyles } from '@material-ui/core/styles';
// import { green, amber } from '@material-ui/core/colors';
// import { useDispatch, useSelector } from 'react-redux';
// import FoodIcon from '../../img/Food.jsx';
// import WalletFilledIcon from '../../img/WalletFilledIcon.jsx';
// import deleteCategoryStarted from '../../redux/actions/deleteCategory/deleteCategoryStarted';
// <<<<<<< scss-layout
// import openModalWindow from '../../redux/actions/modalWindow/openModalWindowAddMoney.js';
// import styles from './Category.module.scss';

// const Category = ({ value, id }) => {
// =======
// import addMoneyStarted from '../../redux/actions/addMoney/addMoneyStarted';
// import styles from './Category.module.css';

// const Category = ({ value, id }) => {
//   const [add, setAdd] = useState('');
// >>>>>>> develop
//   const dispatch = useDispatch();
//   const category = useSelector(state =>
//     state.categories.filter(category => category.id === id)
//   )[0];
// <<<<<<< scss-layout

//   return (
//     <div className={styles.card}>
//       <div
//         className={styles.image}
//         onClick={
//           value === 'store' ? () => dispatch(openModalWindow(id)) : () => {}
//         }
//       >
//         <WalletFilledIcon />
//       </div>
//       <p className={styles.categorySubheader} style={{ fontWeight: '500' }}>
//         {category.name}
//       </p>
//       <p className={styles.categorySubheader}>{category.currentNumber} $</p>
//       {/*<button*/}
//       {/*  type="button"*/}
//       {/*  onClick={() => {*/}
//       {/*    dispatch(deleteCategoryStarted(category.id));*/}
//       {/*  }}*/}
//       {/*>*/}
//       {/*  Delete*/}
//       {/*</button>*/}
// =======
//   const userId = useSelector(state => state.user._id);
//   const useStyles = makeStyles(theme => ({
//     green: {
//       color: theme.palette.getContrastText(green['A200']),
//       backgroundColor: green['A200'],
//     },
//     amber: {
//       color: theme.palette.getContrastText(amber[500]),
//       backgroundColor: amber[500],
//     },
//     large: {
//       width: theme.spacing(7),
//       height: theme.spacing(7),
//     },
//   }));
//   const classes = useStyles();
//   const bgcolor = value === 'expenditure' ? classes.green : classes.amber;
//   const style = classes.large + ' ' + bgcolor;

//   return (
//     <div className={styles.item}>
//       <Avatar className={style}>{category.currentNumber}</Avatar>
//       <p>{category.name}</p>
//       <button
//         type="button"
//         onClick={() => {
//           dispatch(deleteCategoryStarted(userId, category.id));
//         }}
//       >
//         Delete
//       </button>
//       {value === 'store' ? (
//         <>
//           <button
//             type="button"
//             onClick={() => {
//               dispatch(addMoneyStarted(userId, category.id, add));
//               setAdd('');
//             }}
//           >
//             add
//           </button>
//           <input
//             type="text"
//             onChange={event => setAdd(Number(event.target.value))}
//             value={add}
//           ></input>
//         </>
//       ) : (
//         <>
//           <button type="button">trans</button>
//           <input type="text"></input>
//         </>
//       )}
// >>>>>>> develop
//     </div>
//   );
// };

// export default Category;
