function tabs(tabsSelector, tabsContentSelector, tabParentSelector, activeClass){
    //tabs
    let tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabParentSelector);

    function hideTabs(){
        tabsContent.forEach(item => {
            item.classList.add('hide','fade');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }
    function showTab(i=0){
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if(target && target.classList.contains(tabsSelector.slice(1))){
            tabs.forEach((item, i) => {
                if(target === item){
                    hideTabs();
                    showTab(i);
                }
            });
        }
    });
    hideTabs();
    showTab(0);
}

export default tabs;