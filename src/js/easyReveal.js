class EasyReveal
{
  constructor($targets, back)
  {
    this.$targets = $targets;
    this.back = back;
    this.list = [];
    this.$window = $(window);
    this.initList();
    this.scrollInit();
  }
  initList()
  {
    this.$targets.each((i, target)=>
    {
      let $target = $(target);
      let offset = $target.offset().top;
      this.list.push({offset: offset, $target:$target});
    });
  }
  scrollInit()
  {
    this.$window.scroll(()=>
    {
      let scroll = this.$window.scrollTop() + this.$window.height() - 100;
      this.list.forEach((element)=>
      {
        if(element.offset < scroll)
        {
          element.$target.addClass("easyRevealOn");
        }
        else if(this.back)
        {
          element.$target.removeClass("easyRevealOn");
        }
      });
    });
  }
}
let $body = $("body");
if($body.data("easyreveal"))
{
  let $targets = $body.find('[class*="easyReveal"]');
  let easyReveal = new EasyReveal($targets, $body.data("revealback"));
}
