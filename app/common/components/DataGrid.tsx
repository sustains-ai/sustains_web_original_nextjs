// Copyright © 2025 Sustains AI, All Rights Reserved
import * as React from "react";
import Box from "@mui/material/Box";
import { GridColDef, DataGrid as MUIDataGrid } from "@mui/x-data-grid";

export default function DataGrid({ height = "400px", rows, columns }: {readonly height?: string, readonly rows: any[], readonly columns: GridColDef[]}) {
  return (
    <Box sx = {{ height, width: "100%" }}>
      <MUIDataGrid
        rows = {rows}
        columns = {columns}
        initialState = {{
          pagination: {
            paginationModel: {
              pageSize: 10
            }
          }
        }}
        pageSizeOptions = {[10]}
        disableRowSelectionOnClick
        disableColumnMenu
        sx = {{
          "--DataGrid-overlayHeight": "400px",
          "& .MuiDataGrid-row:focus": {
            outline: "none !important"
          },
          "& .MuiDataGrid-cell:focus-within": {
            outline: "none !important"
          }
        }}
      />
    </Box>
  );
}
