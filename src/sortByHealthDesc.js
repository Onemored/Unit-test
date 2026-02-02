export default function sortByHealthDesc(heroes) {
    return [...heroes].sort((a, b) => b.health - a.health);
}
