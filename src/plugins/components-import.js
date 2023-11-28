// ? imported from the app
import FullScreen from '@/components/helpers/full-screen.vue'
import ModalConfirm from '@/components/modals/modal-confirm.vue'
import VImgLoad from '@/components/helpers/v-img-load.vue'
import VImgInput from '@/components/helpers/v-img-input.vue'
import VAvatarUpload from '@/components/helpers/v-avatar-upload.vue'

// ? imported from external
import { VSkeletonLoader } from 'vuetify/lib/components/VSkeletonLoader/index.mjs'
import { VOtpInput } from 'vuetify/lib/components/VOtpInput/index.mjs'
import { VDataTable, VDataTableServer } from 'vuetify/lib/components/VDataTable/index.mjs'
import VueApexCharts from "vue3-apexcharts"
import VueRecaptcha from 'vue3-recaptcha2'

export default {
  VSkeletonLoader,
  VOtpInput,
  VDataTable,
  VDataTableServer,
  VueApexCharts,
  VueRecaptcha,
  FullScreen,
  ModalConfirm,
  VImgLoad,
  VImgInput,
  VAvatarUpload,
}
