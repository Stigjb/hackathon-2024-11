<script>
  import {download, icsTemplate} from '$lib';
</script>

<p>
Leftover food is the biggest category of food waste in households.
This is a shame, because you've already spent time and energy on preparing
the food.
</p>

<p>
Let's get better at using it!
</p>

<h2>Find out when to check your fridge</h2>

<p>Make a habit out of checking your fridge! To help get you started,
  we'll generate a calendar reminder for you
  </p>

<form class="pb-2">
  <fieldset>
  <legend for="weekday">What day are you home?</legend>
  <input type=radio id="monday" name="weekday">
  <label for="monday">Monday</label>
  <input type=radio id="tue" name="weekday">
  <label for="tue">Tuesday</label>
  <input type=radio id="wednesday" name="weekday">
  <label for="wednesday">Wednesday</label>
  <input type=radio id="thursday" name="weekday">
  <label for="thursday">Thursday</label>
  <input type=radio id="friday" name="weekday">
  <label for="friday">Friday</label>
  <input type=radio id="saturday" name="weekday">
  <label for="saturday">Saturday</label>
  <input type=radio id="sunday" name="weekday">
  <label for="sunday">Sunday</label>
  </fieldset>

  <label>I'm home at</label>
  <input type="time" name="when" value="18:00"/>
</form>

<button
  onclick={() => download("leftovermagic.ics", icsTemplate)}
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
Get calendar event
</button>

<style>
h1 {
  font-size: 2rem;
}

</style>

