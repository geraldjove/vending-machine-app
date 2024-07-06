<script setup>
import { ref } from "vue";
const bill = ref("");
const owed = ref("");
const changeText = ref("");
const thousandsText = ref("");
const fiveHundredsText = ref("");
const twoHundredsText = ref("");
const hundredsText = ref("");
const fiftiesText = ref("");
const twentiesText = ref("");
const tensText = ref("");
const fivesText = ref("");
const onesText = ref("");
const twentyFiveCentsText = ref("");
const tenCentsText = ref("");
const fiveCentsText = ref("");
const oneCentText = ref("");

const getChange = (bill, owed) => {
  if (isNaN(bill) || isNaN(owed) || bill < 0 || owed < 0 || owed > 1000) {
    changeText.value =
      "Please enter valid numbers. Owed amount should be between 0 and 1000.";
    return;
  }

  let change = parseFloat(bill) - parseFloat(owed);
  changeText.value = change.toFixed(2);

  console.log(`Change: ${changeText.value}`);

  // Reset value each time the Pay button is clicked

  thousandsText.value = "";
  fiveHundredsText.value = "";
  twoHundredsText.value = "";
  hundredsText.value = "";
  fiftiesText.value = "";
  twentiesText.value = "";
  tensText.value = "";
  fivesText.value = "";
  onesText.value = "";
  twentyFiveCentsText.value = "";
  tenCentsText.value = "";
  fiveCentsText.value = "";
  oneCentText.value = "";

  // End of reset values

  if (isNaN(bill) || isNaN(owed) || bill < 0 || owed < 0 || owed > 1000) {
    changeText.value =
      "Please enter valid numbers. Owed amount should be between 0 and 1000.";
    return;
  }

  if (change < 0) {
    changeText.value = "The bill amount is less than the amount owed";
  } else {
    let thousands = Math.floor(change / 1000);
    change %= 1000;
    let fiveHundreds = Math.floor(change / 500);
    change %= 500;
    let twoHundreds = Math.floor(change / 200);
    change %= 200;
    let hundreds = Math.floor(change / 100);
    change %= 100;
    let fifties = Math.floor(change / 50);
    change %= 50;
    let twenties = Math.floor(change / 20);
    change %= 20;
    let tens = Math.floor(change / 10);
    change %= 10;
    let fives = Math.floor(change / 5);
    change %= 5;
    let ones = Math.floor(change / 1);
    change %= 1;
    let twentyFiveCents = Math.floor(change / 0.25);
    change %= 0.25;
    let tenCents = Math.floor(change / 0.1);
    change %= 0.1;
    let fiveCents = Math.floor(change / 0.05);
    change %= 0.05;
    let oneCent = Math.floor(change / 0.01);
    change %= 0.01;

    thousandsText.value = thousands;
    fiveHundredsText.value = fiveHundreds;
    twoHundredsText.value = twoHundreds;
    hundredsText.value = hundreds;
    fiftiesText.value = fifties;
    twentiesText.value = twenties;
    tensText.value = tens;
    fivesText.value = fives;
    onesText.value = ones;
    twentyFiveCentsText.value = twentyFiveCents;
    tenCentsText.value = tenCents;
    fiveCentsText.value = fiveCents;
    oneCentText.value = oneCent;

    if (thousands > 0) console.log(`1000s: ${thousands}`);
    if (fiveHundreds > 0) console.log(`500s: ${fiveHundreds}`);
    if (twoHundreds > 0) console.log(`200s: ${twoHundreds}`);
    if (hundreds > 0) console.log(`100s: ${hundreds}`);
    if (fifties > 0) console.log(`50s: ${fifties}`);
    if (twenties > 0) console.log(`20s: ${twenties}`);
    if (tens > 0) console.log(`10s: ${tens}`);
    if (fives > 0) console.log(`5s: ${fives}`);
    if (ones > 0) console.log(`1s: ${ones}`);
    if (twentyFiveCents > 0) console.log(`25 centavos: ${twentyFiveCents}`);
    if (tenCents > 0) console.log(`10 centavos: ${tenCents}`);
    if (fiveCents > 0) console.log(`5 centavos: ${fiveCents}`);
    if (oneCent > 0) console.log(`1 centavo: ${oneCent}`);
  }
};

const setBill = (amount) => {
  bill.value = amount;

  // Reset value each time the Pay button is clicked
  owed.value = "";
  changeText.value = "";
  thousandsText.value = "";
  fiveHundredsText.value = "";
  twoHundredsText.value = "";
  hundredsText.value = "";
  fiftiesText.value = "";
  twentiesText.value = "";
  tensText.value = "";
  fivesText.value = "";
  onesText.value = "";
  twentyFiveCentsText.value = "";
  tenCentsText.value = "";
  fiveCentsText.value = "";
  oneCentText.value = "";

  // End of reset values
};
</script>

<template>
  <div class="grid sm:grid-cols-12 min-h-[100vh] shadow-lg">
    <div
      class="bg-metal-black rounded-lg shadow col-span-12 sm:col-span-8 sm:block hidden"
    >
      <div class="grid sm:grid-cols-12 gap-5 p-[25px] sm:min-h-[100vh]">
        <div
          class="bg-image sm:col-span-6 rounded-lg flex justify-center items-center"
        >
          <img class="bg-image" />
        </div>
        <div
          class="bg-image sm:col-span-6 rounded-lg flex justify-center items-center"
        ></div>
      </div>
    </div>
    <div
      class="bg-metal-black rounded-lg shadow col-span-12 sm:col-span-4 flex justify-center items-center"
    >
      <div class="sm:grid-cols-12 grid">
        <div
          class="bg-crt-black bg-overlay sm:col-span-12 text-center sm:min-h-[25vh] min-h-[25vh] sm:w-[15vw] md:w-[25vw] w-[60vw] mx-[auto] flex flex-col justify-center items-center rounded-lg my-2 py-5"
        >
          <span class="text-4xl font-bold uppercase text-cyan-500"
            >Vendo-Mac</span
          >
          <!-- <h3 class="text-cyan-500">Developed by Gerald Jove</h3> -->
          <div class="sm:col-span-12 text-cyan-500 mt-2">
            <div>
              <span>Bill: ₱{{ bill }}</span>
            </div>
            <div>
              <span>Owed: ₱{{ owed }}</span>
            </div>
            <div class="mt-2">
              <span class="font-bold">Change: {{ changeText }}</span>
            </div>
            <div>
              <ul>
                <li v-if="thousandsText > 0">{{ thousandsText }} ₱1000 bill</li>
                <li v-if="fiveHundredsText > 0">
                  {{ fiveHundredsText }} ₱500 bill
                </li>
                <li v-if="twoHundredsText > 0">
                  {{ twoHundredsText }} ₱200 bill
                </li>
                <li v-if="hundredsText > 0">{{ hundredsText }} ₱100 bill</li>
                <li v-if="fiftiesText > 0">{{ fiftiesText }} ₱50 bill</li>
                <li v-if="twentiesText > 0">{{ twentiesText }} ₱20 bill</li>
                <li v-if="tensText > 0">{{ tensText }} ₱10 coin</li>
                <li v-if="fivesText > 0">{{ fivesText }} ₱5 coin</li>
                <li v-if="onesText > 0">{{ onesText }} ₱1 coin</li>
                <li v-if="twentyFiveCentsText > 0">
                  {{ twentyFiveCentsText }} 25 centavos
                </li>
                <li v-if="tenCentsText > 0">{{ tenCentsText }} ¢10 coin</li>
                <li v-if="fiveCentsText > 0">{{ fiveCentsText }} ¢5 coin</li>
                <li v-if="oneCentText > 0">{{ oneCentText }} ¢1 coin</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="sm:col-span-12 flex justify-center items-center rounded-xl">
          <div class="w-[50%]">
            <img
              src="./assets/img/cash-machine-svgrepo-com-2.png"
              alt="cash-slot"
            />
          </div>
        </div>
        <div class="sm:col-span-12 flex justify-center items-center">
          <form
            @submit.prevent="getChange(bill, owed)"
            class="flex flex-col justify-center items-center"
          >
            <div class="w-full flex items-center justify-center my-2">
              <div
                class="w-full min-h-[150px] grid sm:grid-cols-3 grid-cols-2 gap-3"
              >
                <div
                  class="shiny-button text-black font-bold rounded-lg flex justify-center items-center cursor-pointer"
                  @click="setBill(1000)"
                >
                  ₱1000
                </div>
                <div
                  class="shiny-button font-bold rounded-lg flex justify-center items-center cursor-pointer"
                  @click="setBill(500)"
                >
                  ₱500
                </div>
                <div
                  class="shiny-button font-bold rounded-lg flex justify-center items-center cursor-pointer"
                  @click="setBill(200)"
                >
                  ₱200
                </div>
                <div
                  class="shiny-button font-bold rounded-lg flex justify-center items-center cursor-pointer"
                  @click="setBill(100)"
                >
                  ₱100
                </div>
                <div
                  class="shiny-button text-black font-bold rounded-lg flex justify-center items-center cursor-pointer"
                  @click="setBill(50)"
                >
                  ₱50
                </div>
                <div
                  class="shiny-button text-black font-bold rounded-lg flex justify-center items-center cursor-pointer"
                  @click="setBill(20)"
                >
                  ₱20
                </div>
                <div
                  class="shiny-button text-black font-bold rounded-lg flex justify-center items-center cursor-pointer"
                  @click="setBill(0)"
                >
                  ₱0
                </div>
                <div
                  class="shiny-button text-black font-bold rounded-lg flex justify-center items-center cursor-pointer sm:col-span-2"
                  @click="setBill()"
                >
                  CLEAR
                </div>
              </div>
            </div>
            <div class="w-full flex items-center justify-center my-2">
              <label
                for="owed"
                class="uppercase text-gray-200 roboto-font font-bold mr-2 text-lg"
                >Owed:
              </label>
              <div class="relative">
                <span
                  v-if="owed"
                  class="absolute left-2 top-1/2 transform -translate-y-1/2 text-black roboto-font font-bold text-lg"
                  >₱</span
                >
                <input
                  type="text"
                  name="owed"
                  id="owed"
                  v-model="owed"
                  class="rounded-lg uppercase orbitron-font bg-green-500 text-black placeholder-black font-bold px-5 text-center p-2 sm:w-full w-[50vw]"
                  placeholder="Pls enter owed amt"
                />
              </div>
            </div>
            <button
              type="submit"
              class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg mt-4 uppercase w-full"
            >
              Pay
            </button>
          </form>
        </div>
        <div
          class="sm:col-span-12 w-full flex justify-center items-center mt-10"
        >
          <h3 class="text-gray-200 font-bold uppercase shadow-mg">
            Developed by Gerald Jove
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
