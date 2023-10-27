import React from 'react'
import { DataTable } from 'react-native-paper';
import {StyleSheet} from 'react-native';

const UltimosMov = () => {

  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
   {
     key: 1,
     name: 'DEP./TF',
     calories: 356,
     fat: 21,
   },
   {
     key: 2,
     name: 'RETIRO X',
     calories: 262,
     fat: 0,
   },
   {
     key: 3,
     name: 'Frozen yogurt',
     calories: 159,
     fat: 6,
   },
   {
     key: 4,
     name: 'Gingerbread',
     calories: 305,
     fat: 3.7,
   },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
      <DataTable style={styles.table}>
        <DataTable.Title style={styles.title}>Ultimos Movimientos</DataTable.Title>
      <DataTable.Header style={styles.header}>
        <DataTable.Title>Concepto</DataTable.Title>
        <DataTable.Title numeric>Monto</DataTable.Title>
        <DataTable.Title numeric>IVA</DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
          <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={'Rows per page'}
      />
    </DataTable>
  )
}

export default UltimosMov;

const styles = StyleSheet.create({
    table:{
        backgroundColor: '#fff',
        top: 30,
        height: 'auto',
        borderRadius: 10,
        
    },
    title: {
        position: 'absolute',
        top: 0, // Ajusta esta propiedad para controlar la posición vertical del título
        left: 0,
        zIndex: 1, // Asegura que el título esté por encima de la tabla
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Agrega un fondo para que el título sea legible
        width: '100%', // Asegura que el título abarque todo el ancho
        textAlign: 'center', // Centra el texto del título horizontalmente
        paddingVertical: 8, // Añade un poco de espacio vertical para el título
        fontWeight: 'bold', // Aplica un estilo de fuente en negrita para el título
      },
      header: {
        marginTop: 30
      }
})