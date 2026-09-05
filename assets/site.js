/* shared shop logic: digits, cart, wishlist, toast, cards */
function fa(n){return String(n).replace(/\d/g,function(d){return '۰۱۲۳۴۵۶۷۸۹'[d]})}
function fmtP(n){return fa(Number(n).toLocaleString('en-US'))}
function toast(m){var t=document.getElementById('toast');if(!t){alert(m);return}t.textContent=m;t.classList.add('show');clearTimeout(t._x);t._x=setTimeout(function(){t.classList.remove('show')},2200)}
function getCart(){try{return JSON.parse(localStorage.getItem('cb_cart')||'[]')}catch(e){return[]}}
function setCart(c){localStorage.setItem('cb_cart',JSON.stringify(c));updateBadge();renderDrawer()}
function cartCount(){return getCart().reduce(function(s,i){return s+i.q},0)}
function cartTotal(){var P={};(window.PRODUCTS||[]).forEach(function(p){P[p.id]=p});return getCart().reduce(function(s,i){return s+((P[i.id]||{}).price||0)*i.q},0)}
function addToCart(id,q){q=q||1;var c=getCart(),f=c.find(function(i){return i.id===id});if(f)f.q+=q;else c.push({id:id,q:q});setCart(c);toast('محصول به سبد خرید اضافه شد');openDrawer()}
function updateBadge(){var n=cartCount();document.querySelectorAll('#cartCount').forEach(function(e){e.hidden=n<=0;e.textContent=fa(n)})}
function getWish(){try{return JSON.parse(localStorage.getItem('cb_wish')||'[]')}catch(e){return[]}}
function setWish(w){localStorage.setItem('cb_wish',JSON.stringify(w))}
function isWish(id){return getWish().indexOf(id)>=0}
function toggleWish(id,btn){var w=getWish(),i=w.indexOf(id);if(i>=0)w.splice(i,1);else w.push(id);setWish(w);
document.querySelectorAll('.wish[data-w="'+id+'"]').forEach(function(b){b.classList.toggle('active',i<0);b.setAttribute('aria-pressed',i<0)});
toast(i<0?'به علاقه‌مندی‌ها اضافه شد':'از علاقه‌مندی‌ها حذف شد')}
function paintWishes(){document.querySelectorAll('.wish[data-w]').forEach(function(b){var on=isWish(+b.dataset.w);b.classList.toggle('active',on);b.setAttribute('aria-pressed',on)})}
var HEART='<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#64748A" stroke-width="1.8"><path d="M12 20.5C7 16.5 3.5 13.3 3.5 9.6 3.5 7 5.5 5 8 5c1.6 0 3.1.8 4 2.1C12.9 5.8 14.4 5 16 5c2.5 0 4.5 2 4.5 4.6 0 3.7-3.5 6.9-8.5 10.9z"/></svg>';
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function IB(){return window.IMGBASE||''}
function PB(){return (window.PRODBASE==null?'product/':window.PRODBASE)}
function prodCard(p){
var img='<img src="'+(p.img?(IB()+p.img):(IB()+'img/noimg.svg'))+'" alt="'+esc(p.name)+'" loading="lazy">';
var rate=(p.reviews>0&&p.rating)?('<div class="rate"><span class="stars">★★★★★</span><b>'+fa(p.rating)+'</b> ('+fa(p.reviews)+')</div>'):'';
var price=p.price>0?('<div class="price"><b>'+fmtP(p.price)+'</b><small>تومان</small></div><button class="addbtn" onclick="event.preventDefault();addToCart('+p.id+')">🛒 افزودن به سبد</button>')
:('<div class="price"><span class="call">تماس بگیرید</span></div><a class="addbtn" style="text-align:center" href="tel:+982166711243">📞 استعلام قیمت</a>');
var stock=p.stock?'<div class="instock">● موجود در انبار</div>':'<div class="nostock">● ناموجود</div>';
return '<article class="pcard"><button class="wish" data-w="'+p.id+'" aria-label="افزودن به علاقه‌مندی‌ها" aria-pressed="false" onclick="event.preventDefault();toggleWish('+p.id+',this)">'+HEART+'</button>'
+'<a class="im" href="'+PB()+'p-'+p.id+'.html" aria-label="'+esc(p.name)+'">'+img+'</a>'
+'<div class="bd"><span class="brand">'+esc(p.brand||'')+'</span><a href="'+PB()+'p-'+p.id+'.html"><h3>'+esc(p.name)+'</h3></a>'
+rate+stock+price+'</div></article>';
}
function prodById(id){return (window.PRODUCTS||[]).find(function(p){return p.id===id})}
function renderDrawer(){
var box=document.getElementById('drawerItems');if(!box)return;
var c=getCart();
if(!c.length){box.innerHTML='<div class="empty">سبد خرید خالی است.<br><a href="products.html" style="color:var(--org-d);font-weight:800">مشاهده محصولات ←</a></div>'}
else{box.innerHTML=c.map(function(i){var p=prodById(i.id);if(!p)return '';
var img=p.img?('<img src="'+IB()+p.img+'" alt="">'):'';
return '<div class="citem">'+img+'<div><b>'+esc(p.name)+'</b><small>'+fmtP(p.price)+' تومان</small>'
+'<div class="qty"><button onclick="chQty('+p.id+',-1)" aria-label="کمتر">−</button><span>'+fa(i.q)+'</span><button onclick="chQty('+p.id+',1)" aria-label="بیشتر">+</button></div></div>'
+'<button class="rm" onclick="rmItem('+p.id+')">حذف</button></div>'}).join('')}
var t=document.getElementById('drawerTotal');if(t)t.innerHTML=fmtP(cartTotal())+' <small style="font-weight:400;color:var(--mut)">تومان</small>';
updateBadge();
}
function chQty(id,d){var c=getCart(),f=c.find(function(i){return i.id===id});if(!f)return;f.q+=d;if(f.q<=0)c=c.filter(function(i){return i.id!==id});setCart(c)}
function rmItem(id){setCart(getCart().filter(function(i){return i.id!==id}))}
function openDrawer(){var d=document.getElementById('drawer');if(!d)return;renderDrawer();d.classList.add('open');document.getElementById('scrim').classList.add('on')}
function closeDrawer(){var d=document.getElementById('drawer');if(!d)return;d.classList.remove('open');document.getElementById('scrim').classList.remove('on')}
function drawerHTML(){
return '<div class="scrim" id="scrim" onclick="closeDrawer()"></div>'
+'<aside class="drawer" id="drawer" aria-label="سبد خرید"><header><span>سبد خرید</span><button class="hicon" style="color:var(--ink)" onclick="closeDrawer()" aria-label="بستن">✕</button></header>'
+'<div class="items" id="drawerItems"></div>'
+'<footer><div class="total"><span>جمع سبد:</span><span id="drawerTotal"></span></div>'
+'<button class="btn btn-o" style="width:100%" onclick="checkout()">ثبت سفارش</button></footer></aside><div id="toast" role="status"></div>';
}
function checkout(){
var c=getCart();if(!c.length){toast('سبد خرید خالی است');return}
var code='CB-'+Math.floor(100000+Math.random()*899999);
localStorage.setItem('cb_lastorder',JSON.stringify({code:code,items:c,total:cartTotal(),at:Date.now()}));
setCart([]);closeDrawer();
toast('سفارش '+fa(code)+' ثبت شد؛ کارشناس تماس می‌گیرد');
}
document.addEventListener('DOMContentLoaded',function(){
if(!document.getElementById('drawer')){document.body.insertAdjacentHTML('beforeend',drawerHTML())}
updateBadge();renderDrawer();paintWishes();
document.querySelectorAll('.addbtn[data-add]').forEach(function(b){b.addEventListener('click',function(){addToCart(+b.dataset.add,+(document.getElementById('qty')||{value:1}).value||1)})});
var bg=document.getElementById('burger'),mn=document.getElementById('mnav');
if(bg){bg.addEventListener('click',function(){var o=mn.classList.toggle('open');bg.setAttribute('aria-expanded',o)});
mn.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mn.classList.remove('open')})})}
var sb=document.getElementById('searchBtn'),sd=document.getElementById('searchdrop');
if(sb){sb.addEventListener('click',function(){var o=sd.classList.toggle('open');sb.setAttribute('aria-expanded',o)})}
});
