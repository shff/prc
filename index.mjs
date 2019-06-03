import { h, Component, render as preactRender } from "preact";
import { useState, useReducer, useEffect, useLayoutEffect, useRef, useMemo, useCallback, useContext } from "preact/hooks";
import htm from "htm";

const render = (tree, parent) =>
  preactRender(tree, parent, parent.firstElementChild);

const r = {};
const html = htm.bind((node, ...args) => h(r[node] || node, ...args));

export { r, h, html, render, Component, useState, useReducer, useEffect, useLayoutEffect, useRef, useMemo, useCallback, useContext };
