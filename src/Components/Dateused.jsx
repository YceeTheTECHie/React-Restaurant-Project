import React, { Component } from 'react';
function date () {
    let date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const trueDate = day + "-" + month + "-" + year;
    return trueDate;
}

export default date;
