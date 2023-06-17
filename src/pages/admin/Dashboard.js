import React from 'react';
import { Typography, Container } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function Dashboard() {
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
      ];
    
      const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'role', headerName: 'Role', width: 150 },
      ];
    
      return (
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" sx={{ mb: 4 }}>
            Admin Dashboard
          </Typography>
    
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={users} columns={columns} autoHeight
        rowHeight={48}
        headerHeight={48}
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}/>
          </div>
        </Container>
      );
    };
