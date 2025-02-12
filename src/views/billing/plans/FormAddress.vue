<template>
  <div class="billing-address-form">
    <div class="billing-address-form__duplicated">
      <UnnnicInput
        v-model="$store.state.BillingSteps.billing_details.address.postal_code"
        :label="$t('billing.address.cep')"
      />

      <UnnnicFormElement :label="$t('billing.address.country')">
        <UnnnicSelectSmart
          :modelValue="
            [
              countries
                .map(({ native, iso2 }) => ({
                  value: iso2,
                  label: native,
                }))
                .find(
                  ({ value }) =>
                    value ===
                    $store.state.BillingSteps.billing_details.address.country,
                ),
            ].filter((i) => i)
          "
          :options="
            [
              {
                value: '',
                label: $t('billing.address.select'),
              },
            ].concat(
              countries.map(({ native, iso2 }) => ({
                value: iso2,
                label: native,
              })),
            )
          "
          autocomplete
          autocompleteClearOnFocus
          @update:model-value="
            $store.state.BillingSteps.billing_details.address.country =
              $event[0].value
          "
        >
        </UnnnicSelectSmart>
      </UnnnicFormElement>
    </div>

    <div class="billing-address-form__duplicated">
      <UnnnicFormElement
        v-if="statesOptions"
        :label="$t('billing.address.state')"
      >
        <UnnnicSelectSmart
          :modelValue="
            [
              statesOptions
                .map((state) => ({
                  value: state,
                  label: state,
                }))
                .find(
                  ({ value }) =>
                    value ===
                    $store.state.BillingSteps.billing_details.address.state,
                ),
            ].filter((i) => i)
          "
          :options="
            [
              {
                value: '',
                label: $t('billing.address.select'),
              },
            ].concat(
              statesOptions.map((state) => ({
                value: state,
                label: state,
              })),
            )
          "
          autocomplete
          autocompleteClearOnFocus
          @update:model-value="
            $store.state.BillingSteps.billing_details.address.state =
              $event[0].value
          "
        >
        </UnnnicSelectSmart>
      </UnnnicFormElement>

      <UnnnicInput
        v-else
        v-model="$store.state.BillingSteps.billing_details.address.state"
        :label="$t('billing.address.state')"
        :placeholder="$t('billing.address.type')"
      />

      <UnnnicFormElement
        v-if="citiesOptions"
        :label="$t('billing.address.city')"
      >
        <UnnnicSelectSmart
          :modelValue="
            [
              citiesOptions
                .map((city) => ({
                  value: city,
                  label: city,
                }))
                .find(
                  ({ value }) =>
                    value ===
                    $store.state.BillingSteps.billing_details.address.city,
                ),
            ].filter((i) => i)
          "
          :options="
            [
              {
                value: '',
                label: $t('billing.address.select'),
              },
            ].concat(
              citiesOptions.map((city) => ({
                value: city,
                label: city,
              })),
            )
          "
          autocomplete
          autocompleteClearOnFocus
          @update:model-value="
            $store.state.BillingSteps.billing_details.address.city =
              $event[0].value
          "
        >
        </UnnnicSelectSmart>
      </UnnnicFormElement>

      <UnnnicInput
        v-else
        v-model="$store.state.BillingSteps.billing_details.address.city"
        :label="$t('billing.address.city')"
        :placeholder="
          isBrazilian && !brazilianStateSelected
            ? $t('billing.address.select_state')
            : $t('billing.address.type')
        "
        :disabled="isBrazilian && !brazilianStateSelected"
      />
    </div>
    <UnnnicInput
      v-model="$store.state.BillingSteps.billing_details.address.line1"
      :label="$t('billing.address.address_title')"
      :placeholder="$t('billing.address.address_mask')"
    />
    <UnnnicInput
      v-model="$store.state.BillingSteps.billing_details.additionalInformation"
      :label="$t('billing.address.additional_info')"
      :placeholder="$t('billing.address.additional_info_mask')"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import statesAndCitiesOfBrazil from '../../../assets/states-and-cities-of-brazil';
import countries from '../../../assets/countriesnames';

export default {
  name: 'BillingModal',

  props: {
    flow: String,
  },

  data() {
    return {
      countries,
    };
  },

  computed: {
    isBrazilian() {
      return (
        this.$store.state.BillingSteps.billing_details.address.country === 'BR'
      );
    },

    brazilianStateSelected() {
      if (this.isBrazilian) {
        return statesAndCitiesOfBrazil.estados.find(
          ({ nome }) =>
            nome ===
            this.$store.state.BillingSteps.billing_details.address.state,
        );
      }

      return null;
    },

    brazilianCitySelected() {
      if (this.brazilianStateSelected) {
        return this.brazilianStateSelected.cidades.find(
          (city) =>
            city ===
            this.$store.state.BillingSteps.billing_details.address.city,
        );
      }

      return null;
    },

    statesOptions() {
      if (this.isBrazilian) {
        return statesAndCitiesOfBrazil.estados.map(({ nome }) => nome);
      }

      return null;
    },

    citiesOptions() {
      if (this.brazilianStateSelected) {
        return this.brazilianStateSelected.cidades;
      }

      return null;
    },
  },

  watch: {
    '$store.state.BillingSteps.billing_details.address.country'() {
      if (this.isBrazilian) {
        if (this.brazilianStateSelected) {
          if (!this.brazilianCitySelected) {
            this.$store.state.BillingSteps.billing_details.address.city = '';
          }
        } else {
          this.$store.state.BillingSteps.billing_details.address.state = '';
        }
      }
    },

    '$store.state.BillingSteps.billing_details.address.state'() {
      if (this.isBrazilian) {
        this.$store.state.BillingSteps.billing_details.address.city = '';
      }
    },
  },

  methods: {
    ...mapActions(['setBillingStep']),
  },
};
</script>

<style lang="scss">
.billing-address-form {
  .unnnic-form,
  .unnnic-select {
    p {
      margin-top: 0;
    }
  }
  > .unnnic-form {
    margin-bottom: $unnnic-spacing-stack-md;
  }
  .weni-report {
    margin-top: $unnnic-spacing-stack-md;
  }

  &__duplicated {
    display: flex;
    margin-bottom: $unnnic-spacing-stack-md;
    > div {
      width: 100%;
      &:first-child {
        margin-right: $unnnic-spacing-stack-sm;
      }
    }
  }
}
</style>
