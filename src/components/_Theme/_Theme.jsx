import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const drawerWidth = 400

/* font-family: 'Noto Sans', sans-serif;
font-family: 'Noto Serif', serif;
font-family: 'Noto Serif Display', serif; */


const Theme = createTheme({
    palette: {
        primary: {
            main: '#7F64A5',
            contrastText: '#e1f0e2'
        },
        secondary: {
            main: '#B26EAD',
            contrastText: '#9fc8a5'
        },

        error: {
            main: '#58606F',
            
        },

        warning: {
            main: '#ff8949'
        }
    },


    typography: {
        fontFamily: 'Noto Sans, sans-serif',
        fontColor: '#7F64A5'
    },

    MuiTextField: {
        primary: '#86c736',
        secondary: '#c7363e'
    }

})

export default Theme