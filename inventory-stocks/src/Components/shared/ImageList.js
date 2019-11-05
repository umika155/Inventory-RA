import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const ImageList = ({ images }) => {
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Product Images</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {images.map((image, index) => (
          <TableRow key={index}>
            <TableCell component="th" scope="row">
              {image}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ImageList;
