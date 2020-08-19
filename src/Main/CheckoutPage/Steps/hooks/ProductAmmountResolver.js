// Determane how many of the same product there is inside the cart.
import React, { useState } from "react";

export default (cartList) => {
  function countInArray(array, prod) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === prod) {
        count++;
      }
    }
    return count;
  }
  function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
  }

  function ammountResolver(initialList) {
    let IDList = [];
    initialList.map((item) => {
      IDList.push(item._id);
    });

    let count;
    let checkedItems = [];
    let idCountList = [];
    for (let index = 0; index < IDList.length; index++) {
      if (!checkedItems.includes(IDList[index])) {
        count = countInArray(IDList, IDList[index]);
        idCountList.push({ item: IDList[index], count });
        checkedItems.push(IDList[index]);
      }
    }
    let finalList = [];
    idCountList.map((item) => {
      finalList.push({
        item: initialList.find((obj) => obj._id === item.item),
        count: item.count,
      });
    });
    console.log(finalList);
    return finalList;
  }

  return ammountResolver(cartList);
};

const obj = {
  description: "kjgbdkjgbskjfdbgkjdsfbgkjdsfbgkjdsfgbjkdsf",
  img:
    "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/wallpapers/games/rdr2_rdr2_3840x2160.jpg",
  isPreOrder: true,
  name: "Red dead redemption 2",
  price: 100,
  productType: "PC",
  __v: 0,
  _id: "5f2af3d1cd22401744f19616",
};
const obj2 = {
  description: "kjgbdkjgbskjfdbgkjdsfbgkjdsfbgkjdsfgbjkdsf",
  img:
    "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/downloads/wallpapers/games/rdr2_rdr2_3840x2160.jpg",
  isPreOrder: true,
  name: "callof",
  price: 100,
  productType: "PC",
  __v: 0,
  _id: "5f2af3d1cd22401744f19616",
};
const objList = [obj, obj, obj, obj];
