"use client";

import type {
  GridColDef,
  GridRowModesModel,
  GridRowId,
  GridRowsProp,
  GridRowModel,
  GridEventListener,
  GridSlots,
} from "@mui/x-data-grid";
import {
  DataGrid,
  GridActionsCellItem,
  GridToolbarContainer,
  GridRowModes,
} from "@mui/x-data-grid";
import { Button, Box } from "@mui/material";
import { Cancel, Edit, Save, Delete, Add } from "@mui/icons-material";
import { useState } from "react";
import { GridRowEditStopReasons } from "@mui/x-data-grid";
import Link from "next/link";

const useColumns = () => {
  const [rows, setRows] = useState<GridRowsProp>([]);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow?.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Item Name', editable: true },
    { field: 'description', headerName: 'Description', editable: true, width: 200 },
    { field: 'default_unit', headerName: 'Default Unit' },
    { field: 'quantity', headerName: 'Quantity', type: 'number', editable: true },
    { field: 'category', headerName: 'Category' },
    { field: 'expiry_date', headerName: 'Expiry Date', type: 'dateTime', editable: true },
    { field: 'purchase_date', headerName: 'Purchase Date', type: 'dateTime' },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      filterable: false,
      type: 'actions',
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              key={`save-${id}`}
              icon={<Save fontSize="small" />}
              label="Save"
              sx={{ color: 'primary.main' }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              key={`cancel-${id}`}
              icon={<Cancel fontSize="small" />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            key={`edit-${id}`}
            icon={<Edit fontSize="small" />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            key={`delete-${id}`}
            icon={<Delete fontSize="small" />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ]

  return { columns, rows, setRows, rowModesModel, setRowModesModel };
};

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
  ) => void;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props;

  return (
    <GridToolbarContainer>
      <Button
        color="success"
        startIcon={<Add />}
        LinkComponent={Link}
        href="/dashboard/inventories/new"
      >
        Add New
      </Button>
      <Button
        color="error"
        startIcon={<Delete />}
        disabled
      >
        Delete Selected
      </Button>
    </GridToolbarContainer>
  );
}

export default function InventoriesTable() {
  const { columns, rows, setRows, rowModesModel, setRowModesModel } = useColumns();

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  return (
    <Box
      sx={{
        height: 500,
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        className="w-full sm:max-w-lg md:max-w-3xl lg:max-w-4xl"
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar as GridSlots['toolbar'],
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
}