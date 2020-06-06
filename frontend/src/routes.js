import Photos from "pages/photos.vue";
import Albums from "pages/albums.vue";


const c = window.__CONFIG__;

export default [
    {
        name: "home",
        path: "/",
        redirect: "/albums",
    },
    {
        name: "photos",
        path: "/photos",
        component: Photos,
        meta: {title: c.siteCaption, auth: true},
        props: {staticFilter: {photo: "true"}},
    },
    {
        name: "home",
        path: "/albums",
        component: Albums,
        meta: {title: "DSUI Home", auth: true},
        props: {view: "album", staticFilter: {type: "album"}},
    },
    {
        path: "*", redirect: "/albums",
    },
];
