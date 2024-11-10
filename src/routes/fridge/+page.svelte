<script>
  let yeah = false;

  const randomPos = () => {
    const node = document.querySelectorAll("#yeah .happy");
    for (const a of node) {
      const x = Math.floor(Math.random() * 100);
      const y = Math.floor(Math.random() * 90);
      a.style = `left: ${x}%; top: ${y}%;`
    }
  }
  
  const celebrate = () => {
    randomPos();
    yeah = true;
    setInterval(randomPos, 600);
  } 
</script>

<h2>How to check your fridge</h2>

<p>
Lots of leftover food is wasted because it's forgotten in the fridge.
Knowing what you have is the first step to reduce waste.
</p>

<form class="flex flex-col">
  <div>
<input type="checkbox" id="a" name="a">
<label for="a">I know what's in my fridge</label>
</div>
  <div>
<input type="checkbox" id="b" name="b">
<label for="b">I know what I'll use it for</label>
</div>
  <div>
<input type="checkbox" id="c" name="c">
<label for="c">I know how long it'll keep</label>
</div>
</form>

<p>If you don't know what you can use your leftovers for,
  <a href="/how">get inspired here</a>!</p>

<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onclick={celebrate}>I've checked my fridge!</button>

<div id="yeah" class:hidden={!yeah}>
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <div class="happy" />
  <p>
    Well done! Now it's time to set a new reminder
    <p>
      <a href="/">Go back home</a>
      </p>
  </div>
  

 <style>
.hidden {
  display:none;
}

#yeah {
}

.happy {
  font-size: 3rem;
  position:fixed;
  transition: all 500ms;
  pointer-events: none;
}
.happy::before {
  content: "😊";
  }
</style>
