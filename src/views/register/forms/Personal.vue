<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="form-elements">
      <div class="form-elements__row">
        <UnnnicFormElement :label="$t('profile.fields.first_name.label')">
          <UnnnicInput
            :placeholder="$t('profile.fields.first_name.placeholder')"
            :modelValue="firstName"
            @update:model-value="$emit('update:first-name', $event)"
          />
        </UnnnicFormElement>

        <UnnnicFormElement :label="$t('profile.fields.last_name.label')">
          <UnnnicInput
            :placeholder="$t('profile.fields.last_name.placeholder')"
            :modelValue="lastName"
            @update:model-value="$emit('update:last-name', $event)"
          />
        </UnnnicFormElement>
      </div>

      <UnnnicFormElement
        :label="$t('profile.fields.whatsapp_number.label')"
        :error="whatsAppNumber.length ? whatsAppNumberError : false"
      >
        <div class="whatsapp_number__input_container">
          <UnnnicSelectSmart
            class="whatsapp_number__input_container__dial_code"
            :modelValue="[DDIs.find(({ value }) => value === DDI)]"
            :options="DDIs"
            autocomplete
            autocompleteClearOnFocus
            @update:model-value="DDI = $event[0].value"
          >
          </UnnnicSelectSmart>

          <UnnnicInput
            :key="DDI"
            ref="phoneNumber"
            v-model="number"
            class="whatsapp_number__input_container__number"
            :placeholder="$t('profile.fields.whatsapp_number.placeholder')"
            :error="
              number.length ? (whatsAppNumberError ? true : false) : false
            "
            :mask="
              DDI === '+55' ? ['(##) ####-####', '(##) #####-####'] : undefined
            "
          />
        </div>
      </UnnnicFormElement>

      <UnnnicFormElement :label="$t('profile.fields.position.label')">
        <UnnnicSelectSmart
          :modelValue="
            filter([
              position && positions.find(({ value }) => value === position),
            ])
          "
          :options="positions"
          orderedByIndex
          @update:model-value="changePosition"
        >
        </UnnnicSelectSmart>
      </UnnnicFormElement>

      <UnnnicFormElement
        v-if="position === 'Other'"
        :label="$t('profile.fields.position_other.label')"
      >
        <UnnnicInput
          :placeholder="$t('profile.fields.position_other.placeholder')"
          :modelValue="positionOther"
          @update:model-value="$emit('update:position-other', $event)"
        />
      </UnnnicFormElement>
    </div>
  </div>
</template>

<script>
import { filter, uniq } from 'lodash';
import { parsePhoneNumberFromString } from 'libphonenumber-js/max';
import countries from '../../../assets/countryPhoneCodes.json';

export default {
  props: {
    firstName: String,
    lastName: String,
    whatsAppNumber: String,
    position: String,
    positionOther: String,
  },

  data() {
    return {
      number: '',
      DDI: '+55',
      DDIs: countries.map(({ dial_code, emoji }) => ({
        value: dial_code,
        label: emoji + '   ' + dial_code,
      })),
    };
  },

  computed: {
    fullNumber() {
      return this.DDI + this.number;
    },

    whatsAppNumberNumber() {
      return parsePhoneNumberFromString(this.fullNumber);
    },

    whatsAppNumberError() {
      const nationalNumber = this.whatsAppNumberNumber?.nationalNumber || '';

      if (!this.number) {
        return false;
      }

      if (
        !this.number.length ||
        !this.whatsAppNumberNumber ||
        !this.whatsAppNumberNumber.isValid() ||
        uniq(nationalNumber).length <= 1 ||
        uniq(filter(nationalNumber.split(/(\d{2})/g), { length: 2 })).length <=
          1 ||
        uniq(filter(nationalNumber.split(/(\d{3})/g), { length: 3 })).length <=
          1
      ) {
        return this.$t('errors.invalid_contact');
      }

      return null;
    },

    positions() {
      return [
        {
          value: '',
          label: this.$t('profile.fields.position.placeholder'),
        },
        {
          value: 'Autonomous',
          label: this.$t(
            'account.init.info.company.position.options.Autonomous',
          ),
        },
        {
          value: 'Student',
          label: this.$t('account.init.info.company.position.options.Student'),
        },
        {
          value: 'CEO',
          label: this.$t('account.init.info.company.position.options.CEO'),
        },
        {
          value: 'Director',
          label: this.$t('account.init.info.company.position.options.Director'),
        },
        {
          value: 'Manager',
          label: this.$t('account.init.info.company.position.options.Manager'),
        },
        {
          value: 'Coordinator',
          label: this.$t(
            'account.init.info.company.position.options.Coordinator',
          ),
        },
        {
          value: 'Analyst',
          label: this.$t('account.init.info.company.position.options.Analyst'),
        },
        {
          value: 'Assistant',
          label: this.$t(
            'account.init.info.company.position.options.Assistant',
          ),
        },
        {
          value: 'Other',
          label: this.$t('account.init.info.company.position.options.Other'),
        },
      ];
    },
  },

  watch: {
    fullNumber() {
      this.$emit('update:whats-app-number', this.fullNumber);
    },
  },

  mounted() {},

  methods: {
    filter,

    changePosition([value]) {
      this.$emit('update:position', value?.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.whatsapp_number__input_container {
  display: flex;
  flex-wrap: nowrap;
  column-gap: $unnnic-spacing-nano;

  &__dial_code {
    width: 7rem;
  }

  &__number {
    flex: 1;
  }
}
</style>
